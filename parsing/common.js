
var Stop = require('../model/stop-model.js');

var _ = require('underscore');
// Get ids and name for every stop, save it to stopsDict
var findAndReturnStopIds = function (callback){
	var stopsDict = {};
	Stop.find(function(err, stops){
		_.each(stops, function(stop){
			// console.log(stop);
			stopsDict[stop.name] = {
				'id' : stop._id,
				'city' : stop.city
			};
		});
		callback(stopsDict);
	});
}


exports.findAndReturnStopIds = findAndReturnStopIds;