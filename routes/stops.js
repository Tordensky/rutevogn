var Stop = require('../model/stop-model.js');


exports.getBusStops = function(req, res){
	Stop.find().populate('destinations').sort({name: 'asc'}).exec(function (err, destinations) {
		if (err) winston.log('error', err);
		// console.log("Data %s", JSON.stringify(destinations, undefined, 2));
		res.jsonp(destinations);
	});
}
