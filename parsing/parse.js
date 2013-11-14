var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');
var cheerio = require('cheerio');
var request = require('superagent');
var URL = require('url');
var _ = require('underscore');
var async = require('async');
var config = require('./config.js');	// local config file


// Local variables
var stopsDict = {};


// Get ids and name for every stop, save it to stopsDict
Stop.find(function(err, stops){
	_.each(stops, function(stop){
		console.log(stop);
		stopsDict[stop.name] = {
			'id' : stop._id,
			'city' : stop.city
		};
	});
	crawlerStart();
});


// Start function to start it all
function crawlerStart(){
	_.each(config.everyBusStopToParse, function(fromStop){
		_.each(config.dictBusStops[fromStop], function(toStops){
			getHtml(fromStop, toStops);
		});
	});
};


function getHtml(from, to){
	console.log(from, to);
	var date = new Date();	
	// var iterDate = date;
	// var startDate = date;

	// while(startDate - )

	var urlStr = createUrl(from, to, date);
	request.get(urlStr).end(function(res){
		$ = cheerio.load(res.text);

		// 10 depatures
		for(var i=0; i < 9; i++){
			var tmp = $('#tm-result' + i.toString() + '-mapdiv').data()
			var json = JSON.parse(tmp.tmMapOptions).TripData;

			console.log("Done getting json");
			saveDepature(json, from, to);
		}
	});	
}

function saveDepature(json, from, to){
	console.log("Saving depatures: ", from, to)
	console.log(json.start, json.stop, json.i[0].l);

	var start = createDateObject(json.start);
	var stop = createDateObject(json.stop);
	var route = json.i[0].l;

	if(route == '')
		route = json.i[1].l;	// May be a walk the first element

	var dep = new Depature({
		'fromId' : stopsDict[from].id,
		'toId' : stopsDict[to].id,
		'date' : start,
		'arrival' : stop,
		'route' : parseInt(route)
	});

	dep.save(function(err){
		if(err)	console.log("Error saving depature: " + err);
	});
}

function createDateObject(string){
	var bits = string.split(/\D/);
	var date = new Date(bits[2], bits[1] - 1, bits[0], bits[3], bits[4], bits[5]);
	return date;
}

function createUrl(from, to, date){
	var from = config.realNames[from];
	var to = config.realNames[to];

	var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var timeStr = date.getHours() + ":" + date.getMinutes();
    console.log("date date date date", date, dateStr);

	var urlStr = config.firstRootUrl +
				"from=" + from +
				"&to=" + to +
				"&Time=" + timeStr +
				"&Date=" + dateStr +
				config.endRootUrl;

	console.log(urlStr);
	return urlStr;
}

