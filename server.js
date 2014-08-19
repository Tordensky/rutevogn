var express = require('express'),
	depature = require('./routes/depatures'),
	cities = require('./routes/cities'),
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
app.get('/departureFromNames?', depature.getDepaturesFromNames);
app.get('/allroutes', depature.getAllRoutes);
app.get('/stops/:city', stop.getBusStops);
app.get('/stops/:city/minified', stop.getBusStopsMinified);

app.get('/cities', cities.getCities);

app.listen(3000);

console.log('Listening on port 3000...');


// forever restartall
// service apache2 restart