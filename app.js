var express = require('express');
var readdirp = require('readdirp');

var app = express();
app.set('views', __dirname + '/public/app')
app.set('view engine', 'jade')

/*
Set bower and app directories for static retrieval.
JS files from app will use this path, not jade files becaue those need to be rendered
*/
app.use('/static', express.static(__dirname + '/public/common'));
app.use('/app', express.static(__dirname + '/public/app'));

/*
Scan through the app directory to dynamically add js files to html file
*/
var jsAppFiles = [];
var jsDashboardFiles = [];
jsAppFiles.push('/app/app.js');

//Framework js files
readdirp({ root: __dirname + '/public/app/framework/', fileFilter: '*.js' })
  .on('data', function (entry) {
    jsAppFiles.push('/app/framework/' + entry.path);
  });
//Dashboard ui element js files
readdirp({ root: __dirname + '/public/app/dashboard-elements/', fileFilter: '*.js' })
  .on('data', function (entry) {
    jsDashboardFiles.push('/app/dashboard-elements/' + entry.path);
  });

/*
Some routing...may put this in another file later
*/
app.get('/', function (req, res) {
  var returnObj = {};
  returnObj.title = "Crouton";
  returnObj.css = [
    '/static/bower/Materialize/dist/css/materialize.min.css',
    '/static/bower/font-awesome/css/font-awesome.min.css',
    '/static/css/style.css'
  ];
  returnObj.jsExternal = [
    '/static/bower/angular/angular.min.js',
    '/static/js/browserMqtt.js'
  ];
  returnObj.jsApp = jsAppFiles;
  returnObj.jsDashboard = jsDashboardFiles;
  res.render('index',returnObj);
});
//templating angular html (jade) files
app.get('/app-render/*', function (req, res) {
  console.log(req.params);
  res.render(req.params[0]);
});
//404
app.use(function(req, res, next) {
  res.send('Oops, cannot seem to find what you are looking for.');
});

/*
Start the app
*/
var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  var host = process.env.VCAP_APP_HOST || 'localhost';
  console.log('Crouton started at http://%s:%s', host, port);
});
