var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');

var _ = require('underscore');
var request = require('request');
var async = require('async');
var crypto = require('crypto');
var config = require('./config.js');	// local config file

// Local variables
var stopsDict = {};
var alldestinations = {};
var firstRootUrl = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/v1DepartureXML?"

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
		getHtml(fromStop, config.officalStartDate);
	});
};


function getHtml(from, startDate){
	console.log(from, startDate);

	var urlStr = createUrl(from, startDate);

	request(urlStr, function (error, response, body){
		var parseString = require('xml2js').parseString;
		var xml = body;
		parseString(xml, function (err, result) {
            console.log("Data %s", JSON.stringify(result, undefined, 2));

		    prepareSave(result.departurelist['departure'], from);
		});
	});
}

function prepareSave(depatures, depaturename){
	_.each(depatures, function(depature){
		depature = depature['$'];
		var depatureTime = createDateObject(depature.departuretime);
		var route = depature.routename;
		var destination = depature.destination;
		var preHash = depaturename + destination + depatureTime + route;
		
		console.log(depatureTime, route, depaturename, destination);

		if(stopsDict[destination] != undefined)
			saveDepature(depatureTime, route, destination, depaturename, preHash);
	});
}

function saveDepature(depatureTime, route, destination, depature, preHash){

	var dep = new Depature({
		'fromId' : stopsDict[depature].id,
		'from' : depature,
		'toId' : stopsDict[destination].id,
		'to' : destination,
		'date' : depatureTime,
		'arrival' : "",
		'route' : parseInt(route),
		'hash': crypto.createHash('md5').update(preHash).digest('hex')
	});

	dep.save(function(err){
		if(err)	console.log("Error saving depature: " + err);
	});
}

function createDateObject(string){
	var bits = string.split(/\D/);
	//console.log("CreateDateObject: ", string);
	var date = new Date(bits[2], (bits[1] - 1), bits[0], bits[3], bits[4], bits[5]);
	return date;
}



function createUrl(from, date){
	var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    var timeStr = date.getHours() + ":" + date.getMinutes();

	var urlStr = firstRootUrl +
				"hpl=" + config.realNames[from].id + 
				"&Date=" + dateStr;
	console.log(urlStr);
	return urlStr;
}

