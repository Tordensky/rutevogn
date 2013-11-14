var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');
var _ = require('underscore');
var Stop = require('../model/stop-model.js');
var async = require('async');
var Schema = mongoose.Schema;

dictBusStops = {};
busStops = [
	{
		'name' : 'Utsikten',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Sentrum',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Universitet',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Hamna',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Tromsdalen',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Storelva',
		'city' : 'Tromsø',
		'destinations' : []
	}
];

dictBusStops['Utsikten'] = ['Sentrum', 'Universitet', 'Tromsdalen'];
dictBusStops['Sentrum'] = ['Utsikten', 'Universitet', 'Tromsdalen'];
dictBusStops['Tromsdalen'] = ['Utsikten', 'Universitet', 'Sentrum'];
dictBusStops['Storelva'] = ['Universitet', 'Sentrum'];
dictBusStops['Universitet'] = ['Utsikten', 'Universitet', 'Sentrum'];

var counter = 1;
// Insert bus stops to DB
_.each(busStops, function(stop){
	new Stop(stop).save(function(err, stop){
		if(err)	console.log('err creating stop ' + err);

		if(counter >= busStops.length)
			insertDestinations();

		counter++;
	});
});

function insertDestinations(){
	_.each(Object.keys(dictBusStops), function(dest){
		_.each(dictBusStops[dest], function(tmp){
			Stop.findOne({name: tmp}, function(err, stop){
				tmpFunc(stop, dest);
			});
		});
	});
};

function tmpFunc(destStop, orignal){	
	Stop.findOne({name: orignal}, function(err, stop){
		var subStop = new Stop({
	      _id: destStop._id    // assign the _id from the stop
	    });
	    console.log(stop)

	    stop.destinations.push(subStop);
	    stop.save();    
	});
}
