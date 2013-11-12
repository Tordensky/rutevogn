var express = require('express'),
	depature = require('./routes/depatures'),
	stop = require('./routes/stops'),
	async = require('async'),
	winston = require('winston');

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var app = express();

app.use(express.static(__dirname + '/public'));

app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/depature?', depature.getDepatures);
app.get('/stops', stop.getStops);

app.listen(8080);

console.log('Listening on port 8080...');

winston.add(winston.transports.File, { filename: 'error.log' });