var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');
var date = new Date()
console.log(date);
// Depature.remove({date : {$lt : date}}, function(err) { 
// 	console.log('collection removed lesser than ', date, 'removed');
// 	process.exit(0);
// });
Depature.remove(function(err){

});
Stop.remove(function(err){

});