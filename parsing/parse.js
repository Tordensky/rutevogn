var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');
var cheerio = require('cheerio');
var request = require('superagent');
var URL = require('url');
var sleep = require('sleep');
var _ = require('underscore');
var async = require('async');
var crypto = require('crypto');
var config = require('./config.js');	// local config file

// Local variables
var stopsDict = {};
var alldestinations = {};

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
			getHtml(fromStop, toStops, config.officalStartDate);
		});
	});
};


function getHtml(from, to, startDate){
	console.log(from, to, startDate);

	var urlStr = createUrl(from, to, startDate);

	request.get(urlStr).end(function(res){
		$ = cheerio.load(res.text);

		// 10 depatures
		for(var i=0; i < 9; i++){
			var tmp = $('#tm-result' + i.toString() + '-mapdiv').data()
			var json = JSON.parse(tmp.tmMapOptions).TripData;

			// console.log("Done getting json");
			saveDepature(json, from, to);
		}
	});
}

function saveDepature(json, from, to){
	console.log("Save depature: ", from, to);
	var start = createDateObject(json.start);
	var stop = createDateObject(json.stop);
	var route = json.i[0].l;
	var preHash = json.start + json.stop + from + to;
	if(route == '')
		route = json.i[1].l;	// May be a walk the first element

	var dep = new Depature({
		'fromId' : stopsDict[from].id,
		'from' : from,
		'toId' : stopsDict[to].id,
		'to' : to,
		'date' : start,
		'arrival' : stop,
		'route' : parseInt(route),
		'hash': crypto.createHash('md5').update(preHash).digest('hex')
	});

	dep.save(function(err){
		if(err)	console.log("Error saving depature: " + err);
	});
	var lastDate = createDateObject(json.i[json.i.length - 1].a);
	// console.log(lastDate, config.officalEndDate);

	if(lastDate.getTime() < config.officalEndDate.getTime()){
		console.log("goes recursive: ", json.i[json.i.length - 1].a);
		sleep.sleep(1);
		getHtml(from, to, lastDate);
	}
}

function createDateObject(string){
	var bits = string.split(/\D/);
	//console.log("CreateDateObject: ", string);
	var date = new Date(bits[2], (bits[1] - 1), bits[0], bits[3], bits[4], bits[5]);
	return date;
}

function createUrl(from, to, date){
	var from = config.realNames[from];
	var to = config.realNames[to];

	var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    var timeStr = date.getHours() + ":" + date.getMinutes();

	var urlStr = config.firstRootUrl +
				"from=" + from +
				"&to=" + to +
				"&Time=" + timeStr +
				"&Date=" + dateStr +
				config.endRootUrl;

	console.log(urlStr);
	return urlStr;
}

