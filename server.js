var express = require('express'),
	depature = require('./routes/depatures'),
	stop = require('./routes/stops'),
	async = require('async');
//,
//	winston = require('winston');

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var app = express();

app.use(express.static(__dirname + '/public'));

// Your own super cool function
var logger = function(req, res, next) {
    console.log("GOT REQUEST !", req.params, req.query);
    next(); // Passing the request to the next handler in the stack.
}

app.configure(function(){
	app.use(logger); // Here you add your logger to the stack.
	app.use(express.bodyParser());
});

app.get('/departure?', depature.getDepatures);
app.get('/stops', stop.getBusStops);

app.listen(8080);

console.log('Listening on port 8080...');

// winston.add(winston.transports.File, { filename: 'error.log' });

