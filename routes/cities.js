var City = require('../model/city-model');

exports.getCities = function(req, res){
	City.find()
		.sort({name : 'asc'})
		.exec(function(err, cities){
			if(err){
				// winston.log('error getDepatures ', err);
				res.send(400);
			}
			else {
				console.log(cities);
				res.jsonp(cities);
			}
		});
};
