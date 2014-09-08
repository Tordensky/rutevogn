var mongoose = require('mongoose');
mongoose.connect(require('./configcommon').mongodbUrl);

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');
var City = require('../model/city-model.js');

var _ = require('underscore');
var request = require('request');
var async = require('async');
var crypto = require('crypto');
var config = require('./configcommon.js');	// local config file


var length = config.cities.length;
var saved = 0;

_.each(config.cities, function(name){
	var city = City({
		'name': name
	});

	city.save(function(err){
		if(err){
			console.log("Error saving depature: " + err);
			return;
		};
		saved += 1;
		if(saved === length){
			console.log("exiting insert cities");
			process.exit(0);
		}
	});
});
