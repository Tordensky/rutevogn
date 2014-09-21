var mongoose = require('mongoose');
mongoose.connect(require('./configcommon').mongodbUrl);
var _ = require('underscore');
var Stop = require('../model/stop-model.js');
var async = require('async');
var Schema = mongoose.Schema;

var config = null;

if(process.argv[2] === "Oslo"){
	console.log("Process argv is oslo")
	config = require('./configoslo.js');	// local config file
}
else if(process.argv[2] === "Tromso"){
	console.log("Process argv is Tromso")
	config = require('./configtromso.js');	// local config file
}
else {
	console.log("Process argv is not set")
	process.exit(1);
}

var numSubDocuments = countHowManySubDocuments();
var iter = 0;
var counter = 1;

// Insert bus stops to DB
_.each(config.busStops, function(stop){
	Stop.findOne({name : stop.name}, function(err, foundStop){
		if(err){
			console.log('err creating stop ' + err);
			process.exit(0);
		}

		if(foundStop === null){
			createNewStop(stop);
		}
		else {
			// Update current stop by setting new sort_id
			foundStop.sort_id = stop.sort_id;
			foundStop.destinations = stop.destinations;
			foundStop.save(function(err){
				if(err){
					console.log("ERROR SAVING UPDATE OF OLD BUSSTOP: ", foundStop, err);
					process.exit(0);
				}
				startInserting();
			});
		}
	});

});

function createNewStop(stop){
	new Stop(stop).save(function(err, stop){
		if(err){
			console.log('err creating stop ' + err);
			process.exit(9);
		}

		startInserting();
	});
}

function startInserting(){
	if(counter >= config.busStops.length)
		insertDestinations();

	counter++;
}

function insertDestinations(){	
	_.each(Object.keys(config.dictBusStops), function(dest){
		_.each(config.dictBusStops[dest], function(tmp){
			Stop.findOne({name: tmp.name}, function(err, stop){
				if(err){
					console.log(err);
					process.exit(1);

				}
				console.log("Found ", stop);

				saveSubDocument(stop, dest);
			});
		});
	});
};

function saveSubDocument(destStop, orignal){
	console.log(destStop);
	Stop.findOne({name: orignal}, function(err, stop){
		console.log("FOUND: ", destStop);
		var subStop = new Stop({
	      _id: destStop._id    // assign the _id from the stop
	    });
		iter = iter + 1;

	    stop.destinations.push(subStop);
	    stop.save(function(err){
	    	if(iter == numSubDocuments){
				console.log("Done save sub documents");
				process.exit(0);
	    	}
	    });
	});
}

function countHowManySubDocuments(){
	var num = 0;
	_.each(Object.keys(config.dictBusStops), function(dest){
		_.each(config.dictBusStops[dest], function(tmp){
			num = num + 1;
		});
	});
	return num;
}