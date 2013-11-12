var Depature = require('../model/depature-model');

exports.getDepatures = function(req, res){
	var fromId = req.query.from;
	var toId = req.query.to;
	var date = req.query.date;
	console.log(req.query);

	var start = date;
	var end = new Date(2014, 7, 14);

	Depature.find(function(err, depatures){
		console.log(depatures);
	});

	Depature.find({'fromId' : fromId, 'toId' : toId, 'date' : {"$gte" : start, "$lt" : end}}, function(err, depatures){
		if(err)	res.send(400);

		res.jsonp(depatures);
	});
};