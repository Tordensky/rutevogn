var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');

Depature.remove({}, function(err) { 
   console.log('collection removed') 
});

Stop.remove({}, function(err){
	console.log('collection removed');
});
