var Stop = require('../model/stop-model.js');

exports.getBusStops = function(req, res){
	Stop.find({}, null, {sort : {_id : 'asc'}}).populate('destinations').exec(function (err, destinations) {
		if (err){
			winston.log('error', err);
			res.send(400);
		}
		else {
			console.log("Data %s", JSON.stringify(destinations, undefined, 2));
			res.jsonp(destinations);
		}
	});
}
