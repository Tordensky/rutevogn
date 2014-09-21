
var Stop = require('../model/stop-model.js');

var _ = require('underscore');
// Get ids and name for every stop, save it to stopsDict
var findAndReturnStopIds = function (callback){
	console.log("findAndReturnStopIds");
	var stopsDict = {};
	Stop.find(function(err, stops){
		_.each(stops, function(stop){
			// console.log(stop);
			stopsDict[stop.name] = {
				'id' : stop._id,
				'city' : stop.city,
				'ids' : stop.ids
			};
		});
		console.log("Calling callback findAndReturnStopIds");
		callback(stopsDict);
	});
}


exports.findAndReturnStopIds = findAndReturnStopIds;