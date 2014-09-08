var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn-develop');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');

var _ = require('underscore');
var request = require('request');
var async = require('async');
var crypto = require('crypto');
var common = require('./common.js');
var config = require('./configoslo.js');
var rootUrl = "http://reisapi.ruter.no/StopVisit/GetDepartures/"

var timeOut = 10000;
var mytimeOut;

console.log("------ Starting parsing oslo ------");



dbInsertedStops = {}
common.findAndReturnStopIds(function(stops){
	dbInsertedStops = stops;
	console.log("dbInsertedStops", dbInsertedStops);
	_.each(Object.keys(dbInsertedStops), function(nameStop){
		_.each(dbInsertedStops[nameStop]['ids'], function(id){
			console.log("Id: ", id, "nameStop", nameStop);
			fetchDepaturesFromStop(id, nameStop);
		});
	});
});

function fetchDepaturesFromStop(id, depatureName){
	var url = rootUrl + id //+ "?datetime=2014-09-06T16:51";
	request(url, function (error, response, allDepaturesBody){
		if(error){
			console.log(error);
		}
		addConfigedRoutes(JSON.parse(allDepaturesBody), depatureName);
	});
};

function addConfigedRoutes(array, depatureName){
	_.each(array, function(route){
		if(route['MonitoredVehicleJourney']){
			// console.log(route['MonitoredVehicleJourney']);
			var destinationName = route['MonitoredVehicleJourney']['DestinationName'];
			var depatureTime = route['MonitoredVehicleJourney']['MonitoredCall']['AimedArrivalTime'];
			var line = route['MonitoredVehicleJourney']['PublishedLineName'];
			var results = shouldSaveDepature(depatureName, destinationName, line);

			if(results.length > 0){
				_.each(results, function(res){
					var hash = depatureName + res[1] + depatureTime + line;
					saveDepature(depatureTime, line, res[1], depatureName, hash, "realname");
				});
			}
		}
	});
};

function shouldSaveDepature(depatureName, destinationName, line){
	var returnvalue = [];
	_.each(config.dictBusStops[depatureName], function(to){
		_.each(to['routes'], function(depature){
			var tmp = depature.split(":")
			var realDest =  tmp[0];
			var realLine = tmp[1];

			if(line === realLine && realDest === destinationName){
				console.log(realLine + ":" + realDest + " equals? " + line + ":" + destinationName);

				// Found a depature to save
				console.log(line, realLine, realDest, destinationName);
				returnvalue.push([true, to['name']]);
			}
		});
	});
	return returnvalue;
}

function saveDepature(depatureTime, route, destination, depature, preHash, realname){
	console.log("Save - Depature: ",depature, "Destination: ", destination);
	var dep = new Depature({
		'fromId' : dbInsertedStops[depature].id,
		'from' : depature,
		'toId' : dbInsertedStops[destination].id,
		'to' : destination,
		'date' : depatureTime,
		'arrival' : "",
		'route' : parseInt(route),
		'busstop' : realname,
		'hash': crypto.createHash('md5').update(preHash).digest('hex')
	});

	dep.save(function(err){
		if(err){
			console.log("Error saving depature: " + err, preHash);
			return;
		}
		clearTimeout(mytimeOut);
		mytimeOut = setTimeout(quit, timeOut);
	});
}

function createDateObject(string){
	var bits = string.split(/\D/);
	var date = new Date(bits[0], (bits[1]), bits[2], bits[3], bits[4], bits[5]);
	console.log("Date: ", string, date.toUTCString());
	return date;
}


function quit() {
    console.log("done sleeping");
    console.log("DONE");
	process.exit(0);
};