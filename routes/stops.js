var Stop = require('../model/stop-model.js');


exports.getBusStops = function(req, res){
	Stop.find(function(err, stops){
		if(err)	res.send(400);

		res.jsonp(stops);
	});
}