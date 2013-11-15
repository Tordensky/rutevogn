var Stop = require('../model/stop-model.js');


exports.getBusStops = function(req, res){
	Stop.find().populate('destinations').exec(function (err, destinations) {
		if (err) winston.log('error', err);

		res.jsonp(destinations);
	});
}
