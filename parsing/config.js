var firstRootUrl = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/svar?referrer=www.tromskortet.no&lang=no&dep1=&";
var endRootUrl = "&direction=1&search=S%C3%B8k&GetTR0=1&GetTR1=1&GetTR2=1&GetTR3=1&GetTR4=1&GetTR6=1&through=&throughpause=&changepenalty=1&changepause=0&linjer=&destinations=";


var officalStartDate = new Date();
var officalEndDate = new Date(officalStartDate.getTime() + 43200000);

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

dictBusStops = {};
dictBusStops['Utsikten'] = ['Sentrum', 'Universitet', 'Tromsdalen'];
dictBusStops['Sentrum'] = ['Utsikten', 'Universitet', 'Tromsdalen'];
dictBusStops['Tromsdalen'] = ['Utsikten', 'Universitet', 'Sentrum'];
dictBusStops['Storelva'] = ['Universitet', 'Sentrum'];
dictBusStops['Universitet'] = ['Utsikten', 'Sentrum', 'Storelva'];

everyBusStopToParse = Object.keys(dictBusStops);

realNames = {};
realNames['Utsikten'] = "Utsikten (Tromsø)";
realNames['Sentrum'] = "Wito (Tromsø)";
realNames['Tromsdalen'] = "Tromsdalen Bruvegen (Tromsø)";
realNames['Storelva'] = "Storelv snuplass (Tromsø)";
realNames['Universitet'] = "UiTø/ISV (Tromsø)";

exports.realNames = realNames;
exports.dictBusStops = dictBusStops;
exports.busStops = busStops;
exports.everyBusStopToParse = everyBusStopToParse;
exports.endRootUrl = endRootUrl;
exports.firstRootUrl = firstRootUrl;
exports.officalEndDate = officalEndDate;
exports.officalStartDate = officalStartDate;