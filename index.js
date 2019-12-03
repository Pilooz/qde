const port = 8000;
const express = require('express')
const app = express()
const conf = require('./config/config.json');
var index = require('./routes/index');

// view engine setup and static routes
app.set('view engine', 'ejs');
// All resources in public dir
app.use('/', express.static(__dirname + '/public'));
// All application routes
app.use('/data', express.static(__dirname + '/data')); // Routing data
app.use('/media', express.static(__dirname + '/media'));
app.use('/js/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js/slick', express.static(__dirname + '/node_modules/slick-carousel/slick')); // redirect to slick
app.use('/css', express.static(__dirname + '/public/css')); // Routing css
app.use('/font', express.static(__dirname + '/public/font')); // Routing font

// For all routes, doing something common
app.all('/', function (req, res, next) {
  next(); // pass control to the next handler
});

// GET method route
app.get('/', function (req, res) {
  res.render('index', { config: conf});
  //res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.render('index', { config: conf});
  // res.send('POST request to the homepage');
});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})
