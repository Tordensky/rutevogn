var Stop = require('../model/stop-model.js');

exports.getBusStops = function(req, res){
	console.log("Params: ", req.params.city);
	Stop.find({city: req.params.city})
	.sort({sort_id : 'asc'})
	.populate('destinations')
	.exec(function (err, destinations) {
		if (err){
			// winston.log('error getBusStops ', err);
			res.send(400);
		}
		else {
			// console.log("Data %s", JSON.stringify(destinations, undefined, 2));
			res.json(destinations);
		}
	});
}

exports.getBusStopsMinified = function(req, res){
	console.log("Params: ", req.params.city);
	Stop.find({city: req.params.city}, 'name', function (err, destinations) {
		if (err){
			// winston.log('error getBusStops ', err);
			res.send(400);
		}
		else {
			// console.log("Data %s", JSON.stringify(destinations, undefined, 2));
			var result = [];
			destinations.forEach(function(bus){
				result.push(bus.name);
			})
			res.json(result);
		}
	});
}



function sortItUp(destinations){
	return destinations.sort(sortString);
}

function sortString(a, b){
	a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}