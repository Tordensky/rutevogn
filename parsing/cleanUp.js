var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn-develop');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');
var City = require('../model/city-model.js');

var date = new Date()
console.log(date);
Depature.remove({date : {$lt : date}}, function(err) { 
	console.log('collection removed lesser than ', date, 'removed');
	City.remove({}, function(err){
		if(err){
			process.exit(1);
		}
		process.exit(0);
	});
});
