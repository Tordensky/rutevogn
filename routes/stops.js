var Stop = require('../model/stop-model.js');

exports.getBusStops = function(req, res){
	Stop.find({})
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