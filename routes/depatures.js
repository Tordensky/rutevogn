var Depature = require('../model/depature-model');

exports.getDepatures = function(req, res){
	var fromId = req.query.from;
	var toId = req.query.to;
	var date = req.query.date;

	var start = new Date(date);

	Depature.find({'fromId' : fromId, 'toId' : toId, 'date' : {$gte : start}})
		.sort({date : 'asc'})
		.limit(10)
		.exec(function(err, depatures){
			if(err){
				// winston.log('error getDepatures ', err);
				res.send(400);
			}
			else {
				res.jsonp(depatures);
			}
		});
};

exports.getDepaturesFromNames = function(req, res){
	var from = req.query.from;
	var to = req.query.to;
	var date = req.query.date;
	var start = new Date(date);

	Depature.find({'from' : from, 'to' : to, 'date' : {$gte : start}})
		.sort({date : 'asc'})
		.limit(10)
		.exec(function(err, depatures){
			if(err){
				// winston.log('error getDepaturesFromNames ', err);
				res.send(400);
			}
			else {
				res.jsonp(depatures);
			}
		});
}