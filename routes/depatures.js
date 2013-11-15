var Depature = require('../model/depature-model');

exports.getDepatures = function(req, res){
	var fromId = req.query.from;
	var toId = req.query.to;
	var date = req.query.date;
	console.log(req.query);

	var start = new Date(date);
	var end = new Date(2014, 7, 14);	// random

	// May rewrite this to use populate
	Depature.find({'fromId' : fromId, 'toId' : toId, 'date' : {"$gte" : start, "$lt" : end}}, function(err, depatures){
		console.log(err);
		if(err)	res.send(400);
		console.log(depatures);
		res.jsonp(depatures);
	});
};