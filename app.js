
/**
 * Module dependencies.
 */

var express = require('express')
	, http = require('http')
	, path = require('path')
	, config = require('./config');

var app = express();

// all environments
app.set('port', process.env.PORT || config.env.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
  res.render('index', { title: 'Personality Test Project' });
});
app.get('/test', function(req, res) {
  res.render('test', { title: 'Personality Test Project' });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
