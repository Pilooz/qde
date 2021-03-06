#!/usr/bin/env node
/** index.js  */
/*------------------------------------------------------------------------
  Node server for CNR_QDE
------------------------------------------------------------------------*/
const port = 8000;
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const conf = require('./config/config.json');

const https = require('https');
var http = require('http').Server(app);

var io = require('socket.io')(http);
var getJSON = require('get-json');
const fs = require('fs');

// Logging
const morgan = require('morgan');
const  accessLogStream = fs.createWriteStream('/tmp/access.log', {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

// view engine setup and static routes
app.set('view engine', 'ejs');
// All resources in public dir
app.use('/', express.static(__dirname + '/public'));
const data_cache_dir = __dirname + '/public/data';


/*------------------------------------------------------------------------
  // All application routes and path rewrites
------------------------------------------------------------------------*/
app.use('/data', express.static(__dirname + '/data')); // Routing data
app.use('/medias', express.static(__dirname + '/medias'));
app.use('/js/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js/slick', express.static(__dirname + '/node_modules/slick-carousel/slick')); // redirect to slick
app.use('/js/socket.io', express.static(__dirname + '/node_modules/socket.io')); // redirect to socket.io
app.use('/css', express.static(__dirname + '/public/css')); // Routing css
app.use('/font', express.static(__dirname + '/public/font')); // Routing font
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());

/*------------------------------------------------------------------------
  Express routing for html views
------------------------------------------------------------------------*/
var dataPresence;
var dataPresenceNewVal;
var presence=1;
// For all routes, doing something common
app.all('/', function (req, res, next) {
  dataPresenceNewVal = req.body;
  next(); // pass control to the next handler
});

// GET method route
app.get('/', function (req, res) {
  res.render('index', { port: port } );
})

// Simuler la présence
.get('/presence', function(req, res) {
  console.log('Simulation de présence.');
  io.emit('presence', { "presence": 1 } );
  res.end();
})

// POST method route
.post('/', function (req, res) {
  // Sensors have updated their values
  dataPresence = dataPresenceNewVal;
  presence = dataPresence.detector0 || dataPresence.detector1
  console.log("presence="+presence);

  // If someone is detected (presence=0 : the sensors are active on low level),
  // send a socket to browser
  if (presence==0) {
	console.log("Hey ! Someone is here...");
  	io.emit('presence', { "presence": 1 } );
  }
  // If not, let the browser timeout running to switch of app
  res.end();
});

/*------------------------------------------------------------------------
  Server listening
------------------------------------------------------------------------*/
http.listen(port, function(){
  console.log('Http server is listening on port %d', port);
});


function cache_data(f, data) {
	var filename = data_cache_dir + '/' + f + '.json';
	fs.writeFile(filename, data, 'ascii', function(err){
		if (err) {
			console.log(err);
		} else {
			console.log(filename + " has been written succefully.");
		}

	});
}

function get_cached_data(f) {
	var filename = data_cache_dir + '/' + f + '.json';
	if (fs.existsSync(filename)) {
		return JSON.parse(fs.readFileSync(filename));
	} else {
		console.log(filename + " does'not exist !");
	}
}
/*------------------------------------------------------------------------
  Sockets for data services
------------------------------------------------------------------------*/
io.on('connection', function (socket) {
  //
  // Connexion du client.
  //
  socket.on('login_client', function(data){
    console.log(data.msg);
  });

  //
  // Récupération des données de production CNR
  //
  socket.on('ask_for_cnr_data', function(send_response) {
    var default_data = '[{"typeproduction":"Hydraulique","puissancetempsreel":1886,"unite":"MW","horodatage":"26/11/2019 13:20:19"},{"typeproduction":"ENR","puissancetempsreel":115,"unite":"MW","horodatage":"26/11/2019 13:20:19"}]';
    if (fs.existsSync(conf.api_tokens.cnr.url)) {
      var api_response = fs.readFileSync(conf.api_tokens.cnr.url);
      send_response(JSON.parse(api_response));
    } else {
      send_response(JSON.parse(default_data));
    }
  });

  //
  // Récupération des données ATMO
  //
  // Au 21 décembre 2020, l'API change de format.
  // -> les résultats sont plus complets, l'url change et la structure de la réponse aussi.
  //
  socket.on('ask_for_atmo_data', function(send_response) {
    var api_response = {}; 
    console.log(conf.api_tokens.atmo.url + conf.api_tokens.atmo.key);
    getJSON( conf.api_tokens.atmo.url + conf.api_tokens.atmo.key )
    .then(function(api_response) {
      // Recording the file into public/data, for caching purpose
      cache_data('atmo', JSON.stringify(api_response, null, 2));
      send_response(api_response);
    }).catch(function(error) {
      console.log(error);
      send_response(get_cached_data('atmo'));
    });
  });

  //
  // Récupération des données RTE
  //
  socket.on('ask_for_rte_data', function(send_response) {
    var credentialsB64 = Buffer.from(conf.api_tokens.rte.credentials).toString('base64');

    var options = {
      host: conf.api_tokens.rte.host,
      path: conf.api_tokens.rte.path_auth,
      method: "GET",
      headers: { "Authorization": "Basic " + credentialsB64 }
    };

    // 1. Sending request for authorization
    https.get(options, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        res = JSON.parse(data);
        console.log("Got Authorisation token : " + res.access_token);
        // So lets get data with this access token.
        var options2 = {
          host: conf.api_tokens.rte.host,
          path: conf.api_tokens.rte.path_data,
          method: "GET",
          headers: { "Authorization" : "Bearer " + res.access_token }
        }
        // 2. Sending request for data
        https.get(options2, (resp2) => {
          let data2 = '';

          resp2.on('data', (chunk) => {
            data2 += chunk;
          });
          resp2.on('end', () => {
            res2 = JSON.parse(data2);
            // Recording the file into public/data, for caching purpose
            cache_data('rte', data2);
            // So returning them to browser
            send_response(res2);

          }).on("error", (e) => {
            console.log("Error in retrieving data from RTE : " + e.Error);
            send_response(get_cached_data('rte'));
          });
        });

      }).on("error", (e) => {
        console.log("Error in retrieving authorization for RTE : " + e.Error);
        send_response(get_cached_data('rte'));
      });
    }).on("error", (e) => {
    	// Trapping DNS errors if no internet
    	console.log(e.Error);
    	send_response(get_cached_data('rte'));
    });
  });
});
