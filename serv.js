var express = require('express'),
	depature = require('./routes/depatures'),
	cities = require('./routes/cities'),
	configcommon = require('./parsing/configcommon'),
	stop = require('./routes/stops');

mongoose = require('mongoose');
mongoose.connect(configcommon.mongodbUrl);

var app = express();
app.use(express.static(__dirname + '/public'));
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

function parseTromso(){
        var exec = require('child_process').exec;
        console.log("Reparsing Tromso");
        var cmd = 'python ' + __dirname + '/parsing/RUNTROMSO.py';
        exec(cmd);
}

function parseOslo(){
        var exec = require('child_process').exec;
        console.log("Reparsing Oslo");
        var cmd = 'python ' + __dirname + '/parsing/RUNOSLO.py';
        exec(cmd);
}

function parseBoth(){
        var exec = require('child_process').exec;
        console.log("Reparsing");
        var cmd = 'python ' + __dirname + '/parsing/RUN.py';
        exec(cmd);
}

//setInterval(parseOslo, 3600000);
setInterval(parseTromso, 3600000 * 24);

//parseBoth();
parseTromso();
app.listen(80);

console.log("Server up and running on port 8080");


