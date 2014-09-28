var dbInsertedStops = {};
var AKER_BRYGGE = "Aker brygge";
var BISLETT = "Bislett";
var BRUGATA = "Brugata";
var HELSFYR = "Helsfyr";
var KIELLANDS_PLASS = "Kiellands Plass";
var MAJORSTUA = "Majorstua";
var NATIONALTEATERET = "Nationalteateret";
var NYDALEN = "Nydalen";				// 30, 37, 54, 
var OSLO_S = "Jernbanetorget";			// 60, 30, 54, 34, 70, 37, 31
var ST_HANSHAUGEN = "St. Hanshaugen";	// 33, 37, 21
var SAGENE = "Sagene";				// 20, 37, 54, 34
var SKOYEN = "Skøyen";				// 20
var TORSHOV = "Torshov";	// 20, 30, 28
	

// TODO Automatic query for ids based on name

var busStops = [
	{
		'name' : AKER_BRYGGE,
		'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 0,
        'ids' : ['3010045', '3010090']
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
		'name' : SKOYEN,
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 9,
        'ids' : ['3012501']
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

dictBusStops[BISLETT] = [
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:21']},
	{'name' : HELSFYR, 'routes' : ['Helsfyr T:21']},
];

dictBusStops[KIELLANDS_PLASS] = [
	{'name' : BISLETT, 'routes' : ['Aker brygge:21']},
	{'name' : BRUGATA, 'routes' : ['Aker brygge:54', 'Ekeberg Hageby:34']},
	{'name' : OSLO_S, 'routes' : ['Aker brygge:54', 'Ekeberg Hageby:34']},
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:21', 'Aker brygge:54']},
	{'name' : ST_HANSHAUGEN, 'routes' : ['Aker brygge:21']},
	{'name' : HELSFYR, 'routes' : ['Helsfyr T:21']},
	{'name' : SAGENE, 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
];

dictBusStops[BRUGATA] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
	{'name' : SAGENE, 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:54']},
	{'name' : NATIONALTEATERET, 'routes' : ['Aker brygge:54']},

];

dictBusStops[OSLO_S] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
	{'name' : SAGENE, 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:54']},

];
dictBusStops[MAJORSTUA] = [
	{'name' : SKOYEN, 'routes' : ['Skøyen:20']},
	{'name' : SAGENE, 'routes' : ['Galgeberg:20']},
	{'name' : TORSHOV, 'routes' : ['Galgeberg:20']},
];

dictBusStops[ST_HANSHAUGEN] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Helsfyr T:21']},
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:21']},
	{'name' : HELSFYR, 'routes' : ['Helsfyr T:21', 'Helsfyr T:37']}
];

dictBusStops[HELSFYR] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Aker brygge:21']},
	{'name' : ST_HANSHAUGEN, 'routes' : ['Aker brygge:21']},
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:21']},
	{'name' : BISLETT, 'routes' : ['Aker brygge:21']},
];

dictBusStops[AKER_BRYGGE] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Helsfyr T:21', 'Kjelsås stasjon:54']},
	{'name' : ST_HANSHAUGEN, 'routes' : ['Helsfyr T:21']},
	{'name' : HELSFYR, 'routes' : ['Helsfyr T:21']},
	{'name' : BRUGATA, 'routes' : ['Kjelsås stasjon:54']},	
	{'name' : OSLO_S, 'routes' : ['Kjelsås stasjon:54']},
	{'name' : BISLETT, 'routes' : ['Helsfyr T:21']},
	{'name' : NATIONALTEATERET, 'routes' : ['Kjelsås stasjon:54']},
	{'name' : SAGENE, 'routes' : ['Kjelsås stasjon:54']},
];

dictBusStops[NATIONALTEATERET] = [
	{'name' : KIELLANDS_PLASS, 'routes' : ['Kjelsås stasjon:54']},
	{'name' : BRUGATA, 'routes' : ['Kjelsås stasjon:54']},	
	{'name' : SAGENE, 'routes' : ['Kjelsås stasjon:54']},
];

dictBusStops[SAGENE] = [
	{'name' : BRUGATA, 'routes' : ['Aker brygge:54', 'Ekeberg Hageby:34']},
	{'name' : OSLO_S, 'routes' : ['Aker brygge:54', 'Ekeberg Hageby:34', 'Helsfyr T:37']},
	{'name' : AKER_BRYGGE, 'routes' : ['Aker brygge:54']},
	{'name' : SKOYEN, 'routes' : ['Skøyen:20']},
	{'name' : MAJORSTUA, 'routes' : ['Skøyen:20']}

];

dictBusStops[TORSHOV] = [
	{'name' : SKOYEN, 'routes' : ['Skøyen:20']},
	{'name' : MAJORSTUA, 'routes' : ['Skøyen:20']},
	{'name' : SAGENE, 'routes' : ['Skøyen:20']}

];

dictBusStops[SKOYEN] = [
	{'name' : SAGENE, 'routes' : ['Galgeberg:20']},
	{'name' : TORSHOV, 'routes' : ['Galgeberg:20']},
	{'name' : MAJORSTUA, 'routes' : ['Galgeberg:20']},
]

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
