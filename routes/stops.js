var Stop = require('../model/stop-model.js');


exports.getStops = function(req, res){
	Stop.find(function(err, stops){
		if(err)	res.send(400);

		res.jsonp(stops);
	});
}