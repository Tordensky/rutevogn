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

function myFuc(){
        var exec = require('child_process').exec;
        var cmd = 'python /root/new/rutevogn/parsing/RUNOSLO.py';
        console.log("Reparsing");
        //var cmd = 'python ' + __dirname + '/parsing/RUNOSLO.py';
        exec(cmd, function(err, stdout){
                if(err){
                        console.log("ERROR: ", err);
                }
        });
}

setInterval(myFuc, 3600000);
myFuc();
exports.app = app;
