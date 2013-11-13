var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');
var _ = require('underscore');
var Stop = require('../model/stop-model.js');

// Write this in a file or something
busStops = [
	{
		'name' : 'Utsikten',
		'city' : 'Tromsø'
	},
	{
		'name' : 'Sentrum',
		'city' : 'Tromsø'
	},
	{
		'name' : 'Universitet',
		'city' : 'Tromsø'
	},
	{
		'name' : 'Hamna',
		'city' : 'Tromsø'
	},
	{
		'name' : 'Tromsdalen',
		'city' : 'Tromsø'
	},
	{
		'name' : 'Storelva',
		'city' : 'Tromsø'
	}
];

_.each(busStops, function(stop){
	new Stop(stop).save(function(err){
		if(err)	console.log('err creating stop ' + err);
	});
});