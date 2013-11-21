var Depature = require('../model/depature-model');

exports.getDepatures = function(req, res){
	var fromId = req.query.from;
	var toId = req.query.to;
	var date = req.query.date;
	console.log(req.query);

	var start = new Date(date);
	var end = new Date(2014, 7, 14);	// random

	Depature.find({'fromId' : fromId, 'toId' : toId, 'date' : {"$gte" : start, "$lt" : end}})
		.sort({date : 'asc'})
		.limit(10)
		.exec(function(err, depatures){
			if(err){
				winston.log('error', err);
				res.send(400);
			}
			else {
				res.jsonp(depatures);
			}
		});
};