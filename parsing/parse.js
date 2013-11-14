var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rutevogn');

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');
var cheerio = require('cheerio');
var request = require('superagent');
var URL = require('url');
var _ = require('underscore');
var async = require('async');


stopsDict = {};
fromStop = "Utsikten";
toStop = "Sentrum";
var firstRootUrl = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/svar?referrer=www.tromskortet.no&lang=no&dep1=&";
var endRootUrl = "&direction=1&search=S%C3%B8k&GetTR0=1&GetTR1=1&GetTR2=1&GetTR3=1&GetTR4=1&GetTR6=1&through=&throughpause=&changepenalty=1&changepause=0&linjer=&destinations=";

Stop.find(function(err, stops){
	_.each(stops, function(stop){
		console.log(stop);
		stopsDict[stop.name] = {
			'id' : stop._id,
			'city' : stop.city
		};
	});

	getHtml();
})



function createUrl(from, to){
	var date = Date.now();

	// Not tested
	// dateStr = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
	// timeStr = date.getHours() + ":" + date.getMinutes();
	// var urlStr = firstRootUrl + 
	// 			"from=" + from +
	// 			" (Tromsø)" +
	// 			"to=" + to + 
	// 			" (Tromsø)" +
	// 			"Time=" + timeStr + 
	// 			"&Date=" + dateStr + 
	// 			endRootUrl;

	// console.log(URL.format(urlStr));

	return "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/svar?referrer=www.tromskortet.no&lang=no&dep1=&from=Utsikten+%28Troms%C3%B8%29&to=Wito+%28Troms%C3%B8%29&Time=22%3A32&Date=14.11.2013&direction=1&search=S%C3%B8k&GetTR0=1&GetTR1=1&GetTR2=1&GetTR3=1&GetTR4=1&GetTR6=1&through=&throughpause=&changepenalty=1&changepause=0&linjer=&destinations=";
}

function getHtml(){
	var urlStr = createUrl("Utsikten", "Wito");
	request.get(urlStr).end(function(res){
		$ = cheerio.load(res.text);

		// 10 depatures
		for(var i=0; i < 9; i++){
			var tmp = $('#tm-result' + i.toString() + '-mapdiv').data()
			var json = JSON.parse(tmp.tmMapOptions).TripData;

			console.log("Done getting json");
			saveDepature(json);
		}
	});	
}

function saveDepature(json){
	console.log("Saving depatures: ")
	console.log(json.start, json.stop, json.i[0].l);

	var start = createDateObject(json.start);
	var stop = createDateObject(json.stop);

	var dep = new Depature({
		'fromId' : stopsDict[fromStop].id,
		'toId' : stopsDict[toStop].id,
		'date' : start,
		'arrival' : stop,
		'route' : parseInt(json.i[0].l)
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
