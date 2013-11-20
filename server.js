var express = require('express'),
	depature = require('./routes/depatures'),
	stop = require('./routes/stops');

winston = require('winston');
winston.add(winston.transports.File, { filename: 'error.log' });

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var app = express();

app.use(express.static(__dirname + '/public'));

// var logger = function(req, res, next) {
// 	winston.log("GOT REQUEST !", req.params, req.query);
//     next(); 
// }

app.configure(function(){
	// app.use(logger); // Here you add your logger to the stack.
	app.use(express.bodyParser());
});

app.get('/departure?', depature.getDepatures);
app.get('/stops', stop.getBusStops);

app.listen(8080);

console.log('Listening on port 8080...');


// service apache2 restart