var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');
var _ = require('underscore');
var Stop = require('../model/stop-model.js');
var async = require('async');
var Schema = mongoose.Schema;
var config = require('./config.js');	// local config file


var counter = 1;
// Insert bus stops to DB
_.each(config.busStops, function(stop){
	new Stop(stop).save(function(err, stop){
		if(err)	console.log('err creating stop ' + err);

		if(counter >= config.busStops.length)
			insertDestinations();

		counter++;
	});
});

function insertDestinations(){
	_.each(Object.keys(config.dictBusStops), function(dest){
		_.each(config.dictBusStops[dest], function(tmp){
			Stop.findOne({name: tmp.name}, function(err, stop){
				if(err)	console.log(err);
				console.log("Found ", stop, err);

				saveSubDocument(stop, dest);
			});
		});
	});
};

function saveSubDocument(destStop, orignal){
	Stop.findOne({name: orignal}, function(err, stop){
		var subStop = new Stop({
	      _id: destStop._id    // assign the _id from the stop
	    });

	    stop.destinations.push(subStop);
	    stop.save();    
	});
}
