const port = 8000;
const express = require('express')
const app = express()
const conf = require('./config/config.json');
// var index = require('./routes/index');

var http = require('http').Server(app); //
var io = require('socket.io')(http);
var getJSON = require('get-json');

// view engine setup and static routes
app.set('view engine', 'ejs');
// All resources in public dir
app.use('/', express.static(__dirname + '/public'));
// All application routes
app.use('/data', express.static(__dirname + '/data')); // Routing data
app.use('/media', express.static(__dirname + '/media'));
app.use('/js/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js/slick', express.static(__dirname + '/node_modules/slick-carousel/slick')); // redirect to slick
app.use('/js/socket.io', express.static(__dirname + '/node_modules/socket.io')); // redirect to socket.io
app.use('/css', express.static(__dirname + '/public/css')); // Routing css
app.use('/font', express.static(__dirname + '/public/font')); // Routing font

// For all routes, doing something common
app.all('/', function (req, res, next) {
  next(); // pass control to the next handler
});

// GET method route
app.get('/', function (req, res) {
  res.render('index');
  //res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.render('index');
  // res.send('POST request to the homepage');
});

http.listen(port, function(){
  console.log('Http server is listening on port %d', port);
});


/*
  Services de socket pour les mises à jours de données RTE et ATMO
*/
io.on('connection', function (socket) {

  socket.data = {};
  
  socket.on('login_client', function(data){
    console.log(data.msg);
  });

	socket.on('ask_for_atmo_data', function(send_response) {
    var api_response = {};

    getJSON( conf.api_tokens.atmo.url + conf.api_tokens.atmo.key )
    .then(function(api_response) {
      // socket.emit('get_atmo_data', { data: api_response });
      send_response(api_response);
    }).catch(function(error) {
      console.log(error);
    });

	});
});