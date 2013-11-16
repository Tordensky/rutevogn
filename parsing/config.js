var firstRootUrl = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/svar?referrer=www.tromskortet.no&lang=no&dep1=&";
var endRootUrl = "&direction=1&search=S%C3%B8k&GetTR0=1&GetTR1=1&GetTR2=1&GetTR3=1&GetTR4=1&GetTR6=1&through=&throughpause=&changepenalty=1&changepause=0&linjer=&destinations=";


var officalStartDate = new Date();
var officalEndDate = new Date(officalStartDate.getTime() + 43200000);

dictBusStops = {};
busStops = [
	{
		'name' : 'Universitet',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Giæverbukta',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Stakkevollan',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Sentrum',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Universitetssykehuset',
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
	},
	{
		'name' : 'Kroken',
		'city' : 'Tromsø',
		'destinations' : []
	},
	{
		'name' : 'Storslett',
		'city' : 'Tromsø',
		'destinations' : []
	}
];

dictBusStops = {};
dictBusStops['Universitet'] = ['Stakkevollan', 'Sentrum', 'Storelva', 'Storslett', 'Giæverbukta', 'Kroken'];
// dictBusStops['Stakkevollan'] = ['Sentrum', 'Universitet', 'Tromsdalen'];
// dictBusStops['Sentrum'] = ['Stakkevollan', 'Universitet', 'Tromsdalen'];
// dictBusStops['Tromsdalen'] = ['Stakkevollan', 'Universitet', 'Sentrum'];
// dictBusStops['Storelva'] = ['Universitet', 'Sentrum'];

everyBusStopToParse = Object.keys(dictBusStops);

// TODO correct this IDs and real names
realNames = {};
realNames['Stakkevollan'] = {'name' : "Utsikten (Tromsø)", 'id' : '19021323'};
realNames['Sentrum'] = "Wito (Tromsø)";
realNames['Tromsdalen'] = "Tromsdalen Bruvegen (Tromsø)";
realNames['Storelva'] = "Storelv snuplass (Tromsø)";
realNames['Universitet'] = {'name' : "UiTø/ISV (Tromsø)", 'id' : '19021323'};
realNames['Universitetssykehuset'] = {'name' : 'Universitetssykehuset (Tromsø)', 'id' : '19021324'};
realNames['Giæverbukta'] = {'name' : 'Giæverbukta (Tromsø)', 'id' : '19021324'};
realNames['Kroken'] = {'name' : 'Kroken (Tromsø)', 'id' : '512515'};
realNames['Storslett'] = {'name' : 'Storslett (Tromsø)', 'id' : '512515'};

exports.realNames = realNames;
exports.dictBusStops = dictBusStops;
exports.busStops = busStops;
exports.everyBusStopToParse = everyBusStopToParse;
exports.endRootUrl = endRootUrl;
exports.firstRootUrl = firstRootUrl;
exports.officalEndDate = officalEndDate;
exports.officalStartDate = officalStartDate;

