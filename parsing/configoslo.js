var dbInsertedStops = {};
var busStops = [
    {
		'name' : 'Kiellands Plass',
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 2
	},
    {
		'name' : 'Brugata',
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 1
	},
    {
		'name' : 'Oslo S',
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 3
	},
    {
		'name' : 'Majorstua',
        'city' : 'Oslo',
        'destinations' : [],
        'sort_id' : 4
	}

];

var idsStop = {};

idsStop['Kiellands Plass'] = {
	'id' : '3010330'
}

idsStop['Brugata'] = {
	'id' : '3010065'
}

idsStop['Majorstua'] = {
	'id' : '3010201'
}

idsStop['Oslo S'] = {
	'id' : '3017016'
}

var dictBusStops = {};

dictBusStops['Kiellands Plass'] = [
	{'name' : 'Brugata', 'routes' : ['Aker brygge:54', 'Ekeberg Hageby:34']},
	{'name' : 'Oslo S', 'routes' : ['Aker brygge:54', 'Ekeberg Hageby:34']},
	// {'name' : 'Valle', 'routes' : ['']}
];

dictBusStops['Brugata'] = [
	{'name' : 'Kiellands Plass', 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
];

dictBusStops['Oslo S'] = [
	{'name' : 'Kiellands Plass', 'routes' : ['Kjelsås stasjon:54', 'Tåsen:34']},
];
dictBusStops['Majorstua'] = [];

exports.everyBusStopToParse = Object.keys(dictBusStops);
exports.dictBusStops = dictBusStops;
exports.busStops = busStops;
exports.idsStop = idsStop;