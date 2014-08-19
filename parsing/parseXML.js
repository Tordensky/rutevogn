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
var urlGetId = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/v1PointStageXML?name="

var parseFromDate;
var parseToDate;
var listOfObjects = [];

var timeOut = 100000;
var mytimeOut;


// print process.argv
process.argv.forEach(function (val, index, array) {
	// console.log(index + ': ' + val);
	if(index == 2)
		parseFromDate = new Date(val);
	if(index == 3)
		parseToDate = new Date(val);
});

var numDaysForward = (parseToDate - parseFromDate) / (1000*60*60*24);
// console.log("Days to fetch: ", numDaysForward);


// Get ids and name for every stop, save it to stopsDict
Stop.find(function(err, stops){
	_.each(stops, function(stop){
		// console.log(stop);
		stopsDict[stop.name] = {
			'id' : stop._id,
			'city' : stop.city
		};
	});
	var iterDate = parseFromDate;
	for(var i=0; i <= numDaysForward; i++){
		// console.log("Crawls ", iterDate);
	
		crawlerStart(new Date(clone(iterDate)));
		iterDate.setDate(iterDate.getDate() + 1);
	}
});


// Cheat clone
function clone(a) {
   return JSON.parse(JSON.stringify(a));
}


// Start function to start it all
function crawlerStart(date){
	_.each(config.everyBusStopToParse, function(fromStop){
		getXML(fromStop, date);
	});
};

function getXML(name, date){
	var realnames = config.realNames[name];

	_.each(realnames, function(realname){
		var url = urlGetId + realname + "+%28Tromsø%29+%5Bholdeplass%5D";
		//console.log("UrlGetId: " + url);

		request(url, function (error, response, body){
			var parseString = require('xml2js').parseString;
			var xml = body;

			parseString(xml, function (err, result) {
	            // console.log("Data %s", JSON.stringify(result, undefined, 2));

	            if(result.stages.i != undefined){
		            var id = result.stages.i[0]['$'].v;
		            getHtml(name, date, id, realname);
	            }
	            else {
	            	console.log("UNDEFINED RESULT OF QUERYING BUSSHOLDEPLASS");
	            }
			});
		});
	});
}

function getHtml(from, startDate, id, realname){
	//console.log(from, startDate);

	var urlStr = createUrl(from, startDate, id);

	request(urlStr, function (error, response, body){
		var parseString = require('xml2js').parseString;
		var xml = body;
		if(xml){
			parseString(xml, function (err, result) {
	           //console.log("Data %s", JSON.stringify(result, undefined, 2));

			    prepareSave(result.departurelist['departure'], from, realname);
			});
		}
	});
}

function prepareSave(depatures, depaturename, realname){

	_.each(depatures, function(depature){
		depature = depature['$'];
		//console.log("Data %s", JSON.stringify(depature, undefined, 2));

		var depatureTime = createDateObject(depature.departuretime);
		var route = depature.routename;
		var destination = depature.destination;
		var finaldest = destination + ":" + route.toString();

		// console.log(depatureTime, route, depaturename, destination);

		/* Save busStops on the road to the final destination */
		_.each(config.dictBusStops[depaturename], function(toDest){
			// Iterate thorugh each route
			_.each(toDest.routes, function(toDestRoute){
				if(toDestRoute == finaldest){
					// console.log(toDestRoute, depaturename, depatureTime);

					var preHash = realname + toDest.name + toDestRoute + depatureTime;

					if(stopsDict[toDest.name] != undefined){
						saveDepature(depatureTime, route, toDest.name, depaturename, preHash, realname);
						// console.log(preHash);
					}
				};
			});
		});

		// var preHash = depaturename + destination + depatureTime + route;

		// Save final destination for route
		// if(stopsDict[destination] != undefined)
		// 	saveDepature(depatureTime, route, destination, depaturename, preHash);
	});
}

function saveDepature(depatureTime, route, destination, depature, preHash, realname){
	//console.log("FromId: ", stopsDict[depature].id, ", ToId: ", stopsDict[destination].id);
	var dep = new Depature({
		'fromId' : stopsDict[depature].id,
		'from' : depature,
		'toId' : stopsDict[destination].id,
		'to' : destination,
		'date' : depatureTime,
		'arrival' : "",
		'route' : parseInt(route),
		'busstop' : realname,
		'hash': crypto.createHash('md5').update(preHash).digest('hex')
	});

	dep.save(function(err){
		if(err){
			// console.log("Error saving depature: " + err);
			return;
		}
		clearTimeout(mytimeOut);
		mytimeOut = setTimeout(quit, timeOut);
	});
}

function createDateObject(string){
	var bits = string.split(/\D/);
	var date = new Date(bits[2], (bits[1] - 1), bits[0], bits[3], bits[4], bits[5]);
	console.log("Date: ", date.toUTCString());
	return date;
}

function createUrl(from, date, id){
	var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    var timeStr = date.getHours() + ":" + date.getMinutes();

	var urlStr = firstRootUrl +
				"hpl=" + id + 
				"&Date=" + dateStr;
	//console.log(urlStr);
	return urlStr;
}


function quit() {
    console.log("done sleeping");
    console.log("DONE");
	process.exit(0);
};


