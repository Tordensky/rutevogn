var dbInsertedStops = {};
var MAJORSTUA = "Majorstua";
var OSLO_S = "Jernbanetorget";
var AKER_BRYGGE = "Aker brygge";
var KIELLANDS_PLASS = "Kiellands Plass";
var BRUGATA = "Brugata";
var ST_HANSHAUGEN = "St. Hanshaugen";
var HELSFYR = "Helsfyr";
var BISLETT = "Bislett";
var NATIONALTEATERET = "Nationalteateret";
var SAGENE = "Sagene";
var TORSHOV = "Torshov (vogts)";
var TOYEN = "Tøyen";
var VALLE = "Valle";
// TODO Automatic query for ids based on name

var busStops = [
	{
		'name' : AKER_BRYGGE,
		'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 0,
        'ids' : ['3010045']
	},
	{
		'name' : BISLETT,
		'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 1,
        'ids' : ['3010311', '3010312']
	},
    {
		'name' : BRUGATA,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 2,
        'ids' : ['3010065']
	},
    {
		'name' : HELSFYR,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 3,
        'ids' : ['3011441', '3011439', '3011440', '3011442']
	},
    {
		'name' : KIELLANDS_PLASS,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 4,
        'ids' : ['3010330']
	},

    {
		'name' : MAJORSTUA,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 5,
        'ids' : ['3010201']
	},
	{
		'name' : NATIONALTEATERET,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 6,
        'ids' : ['3010030', '3010031', '3010032']
	},
    {
		'name' : OSLO_S,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 7,
        'ids' : ['3010010', '3010011', '3010012', '3010013', '3010014', '3010015']
	},
    {
		'name' : SAGENE,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 8,
        'ids' : ['3010410', '3010412']
	},
    {
		'name' : ST_HANSHAUGEN,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 9,
        'ids' : ['3010320', '3010321']
	},
	{
		'name' : TORSHOV,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 10,
        'ids' : ['3010430']
	}
];


// TODO find all line numbers and destination name to ease up the task of updating config
var dictBusStops = {};

dictBusStops[KIELLANDS_PLASS] = [
	{'name' : BRUGATA, 'routes' : ['Aker brygge:54', 'Ekeberg Hageby:34']},
	{'name' : OSLO_S, 'routes' : ['Aker brygge:54', 'Ekeberg Hageby:34']},
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:21']},
	{'name' : ST_HANSHAUGEN, 'routes' : ['Aker brygge:21']},
	{'name' : HELSFYR, 'routes' : ['Helsfyr T:21']}
];

dictBusStops[BRUGATA] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
];

dictBusStops[OSLO_S] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
];

dictBusStops[MAJORSTUA] = [];

dictBusStops[ST_HANSHAUGEN] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Helsfyr T:21']},
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:21']},
	{'name' : HELSFYR, 'routes' : ['Helsfyr T:21']}
];

dictBusStops[HELSFYR] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Aker brygge:21']},
	{'name' : ST_HANSHAUGEN, 'routes' : ['Aker brygge:21']},
];

dictBusStops[AKER_BRYGGE] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Helsfyr T:21']}
];

var allRoutes = [];

for(var key in dictBusStops){
	for(var i=0; i < dictBusStops[key].length; i++){
		var to = dictBusStops[key][i];
		allRoutes.push(key + "-" + to.name);
	}
}

exports.allRoutes = allRoutes;
exports.everyBusStopToParse = Object.keys(dictBusStops);
exports.dictBusStops = dictBusStops;
exports.busStops = busStops;
