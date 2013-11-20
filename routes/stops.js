var Stop = require('../model/stop-model.js');


exports.getBusStops = function(req, res){
	Stop.find().sort({name: 'ascending'}).populate('destinations').exec(function (err, destinations) {
		if (err) winston.log('error', err);
		// console.log("Data %s", JSON.stringify(destinations, undefined, 2));
		res.jsonp(destinations);
	});
}
