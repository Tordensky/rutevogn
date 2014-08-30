var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');

var _ = require('underscore');
var request = require('request');
var async = require('async');
var crypto = require('crypto');
var common = require('./common.js');
var config = require('./configoslo.js');


var rootUrl = "http://reisapi.ruter.no/StopVisit/GetDepartures/"

dbInsertedStops = {}
common.findAndReturnStopIds(function(stops){
	dbInsertedStops = stops;
	console.log("dbInsertedStops", dbInsertedStops);
	_.each(Object.keys(config.idsStop), function(from){
		var idToQuery = config.idsStop[from]['id'];
		console.log(idToQuery);
		_.each(config.dictBusStops[from], function(toDest){
			console.log("Id: ", idToQuery, "Todest", toDest['name']);
			fetchRoutes(idToQuery, from);

		});
	});
});


function fetchRoutes(id, depatureName){
	var url = rootUrl + id + "?datetime=2014-08-30T16:37";
	request(url, function (error, response, body){
		var times = iterRoutes(JSON.parse(body), depatureName);
	});
};

function iterRoutes(array, depatureName){
	_.each(array, function(route){
		// console.log(route['MonitoredVehicleJourney']);
		if(route['MonitoredVehicleJourney']){
			var destinationName = route['MonitoredVehicleJourney']['DestinationName']
			var depatureTime = route['MonitoredVehicleJourney']['MonitoredCall']['AimedArrivalTime'];
			var line = route['MonitoredVehicleJourney']['PublishedLineName'];
			var result = shouldSaveRoute(depatureName, destinationName, line);
			console.log(result);

			if(result[0] === true){
				var hash = destinationName + depatureName + depatureTime + line;
				saveDepature(depatureTime, line, result[1], depatureName, hash, "realname");
			}
		}
	});
};

function shouldSaveRoute(depatureName, destinationName, line){
	var returnvalue = [false, undefined];
	_.each(config.dictBusStops[depatureName], function(to){
		_.each(to['routes'], function(depature){
			var realDest =  depature.split(":")[0];
			var realLine = depature.split(":")[1];

			if(line === realLine && realDest === destinationName){
				console.log(line, realLine, realDest, destinationName);
				returnvalue[0] = true;
				returnvalue[1] = to['name'];
			}

		});
	});
	return returnvalue;
}


function saveDepature(depatureTime, route, destination, depature, preHash, realname){
	console.log("Save depature",depature, destination, dbInsertedStops);
	console.log(dbInsertedStops);
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
			console.log("Error saving depature: " + err);
			return;
		}
		else { 
			console.log("saved");
		}
	});
}

function createDateObject(string){
	var bits = string.split(/\D/);
	var date = new Date(bits[0], (bits[1]), bits[2], bits[3], bits[4], bits[5]);
	console.log("Date: ", string, date.toUTCString());
	return date;
}