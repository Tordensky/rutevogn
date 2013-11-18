var firstRootUrl = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/svar?referrer=www.tromskortet.no&lang=no&dep1=&";
var endRootUrl = "&direction=1&search=S%C3%B8k&GetTR0=1&GetTR1=1&GetTR2=1&GetTR3=1&GetTR4=1&GetTR6=1&through=&throughpause=&changepenalty=1&changepause=0&linjer=&destinations=";


var officalStartDate = new Date();
var officalEndDate = new Date(officalStartDate.getTime() + 43200000);

dictBusStops = {};

busStops = [
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
            'name' : 'Universitet',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Hamna',
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
            'name' : 'Giæverbukta',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Slettaelva',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Workinnmarka',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Åsgård',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Tromsø Museum',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Telegrafbukta',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Tromsø Lufthavn',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Kroken Sør',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Mortensnes',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Fagereng',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Lunheim',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Tomasjord',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Reinen',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Gammelgård',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Myreng',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Eidkjosen',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'UNN',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Elverhøy',
            'city' : 'Tromsø',
            'destinations' : []
    },
    {
            'name' : 'Solligården',
            'city' : 'Tromsø',
            'destinations' : []
    }
];

dictBusStops = {};
dictBusStops['Stakkevollan'] = [
	{'name' : 'Sentrum', 'routes' : ['20', '42']},
	{'name' : 'Universitet', 'routes' : ['20', '32']},
	{'name' : 'Tromsdalen', 'routes' : ['20']},
	{'name' : 'Kroken', 'routes' : ['20']},
	{'name' : 'Giæverbukta', 'routes' : ['42']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['42']},
	{'name' : 'Lunheim', 'routes' : ['20']},
	{'name' : 'Tomasjord', 'routes' : ['20']},
	{'name' : 'UNN', 'routes' : ['20', '32']}
]

dictBusStops['Sentrum'] = [
	{'name' : 'Stakkevollan', 'routes' : ['42', '20']},
	{'name' : 'Telegrafbukta', 'routes' : ['34']},
	{'name' : 'Giæverbukta', 'routes' : ['42', '40', '34', '24', '26', '28']},
	{'name' : 'Tomasjord', 'routes' : ['20', '24']},
	{'name' : 'Universitet', 'routes' : ['20', '34', '']},
	{'name' : 'Tromsdalen', 'routes' : ['26', '20', '28', '24']}
	{'name' : 'Mortensnes', 'routes' : ['24', '34']}
	{'name' : 'UNN', 'routes' : ['34', '22', '20']},
	{'name' : 'Solligården', 'routes' : ['28']},
	{'name' : 'Eidkjosen', 'routes' : ['42', '425', '420']}
	{'name' : 'Workinnmarka', 'routes' : ['40']},
	{'name' : 'Kroken Sør', 'routes' : ['24']},
	{'name' : 'Reinen', 'routes' : ['28']},
	{'name' : 'Gammelgård', 'routes' : ['28']},
	{'name' : 'Storelva', 'routes' : ['42']},
	{'name' : 'Slettaelva', 'routes' : ['40']},
	{'name' : 'Fargereng', 'routes' : ['34']},
	{'name' : 'Åsgård', 'routes' : ['26', '34']},
	{'name' : 'Tromsø Museum', 'routes' : ['37']},
	{'name' : 'Myreng', 'routes' : ['26', '40']},
	{'name' : 'Elverhøy', 'routes' : ['26']},
	{'name' : 'Hamna', 'routes' : ['28']},
	{'name' : 'Fagereng', 'routes' : ['34']}
];
dictBusStops['Tromsdalen'] = [
	{'name' : 'Stakkevollan', 'routes' : ['20']},
	{'name' : 'Universitet', 'routes' : ['20']},
	{'name' : 'Sentrum', 'routes' : ['20', '24', '26', '28']},
	{'name' : 'Åsgård', 'routes' : ['26']},
	{'name' : 'Solligården', 'routes' : ['28']},
	{'name' : 'Reinen', 'routes' : ['28', '412']},
	{'name' : 'Gammelgård', 'routes' : ['28']},
	{'name' : 'Myreng', 'routes' : ['26']},
	{'name' : 'UNN', 'routes' : ['20']},
	{'name' : 'Elverhøy', 'routes' : ['26']},
	{'name' : 'Giæverbukta', 'routes' : ['26', '24', '28']}
];

dictBusStops['Storelva'] = [
	{'name' : 'Stakkevollan', 'routes' : ['42']},
	{'name' : 'Sentrum', 'routes' : ['42', '420']},
	{'name' : 'Giæverbukta', 'routes' : ['42']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['42']},
	{'name' : 'Universitet', 'routes' : ['43', '425']},
	{'name' : 'UNN', 'routes' : ['43', '425']},

];

dictBusStops['Universitet'] = [
	{'name' : 'Sentrum', 'routes' : ['20', '22', '34']},
	{'name' : 'Tromsdalen', 'routes' : ['20']},
	{'name' : 'Tomasjord', 'routes' : ['20']},
	{'name' : 'Giæverbukta', 'routes' : ['22', '34']},
	{'name' : 'Fagereng', 'routes' : ['34']},
	{'name' : 'Telegrafbukta', 'routes' : ['34']},
];

dictBusStops['Hamna'] = [
	{'name' : 'Giæverbukta', 'routes' : ['28']},
	{'name' : 'Sentrum', 'routes' : ['28']},
	{'name' : 'Reinen', 'routes' : ['28']},
	{'name' : 'Solligården', 'routes' : ['28']},
	{'name' : 'Gammelgård', 'routes' : ['28']},
	{'name' : 'Tromsdalen', 'routes' : ['28']},
	{'name' : 'UNN', 'routes' : ['32']},
	{'name' : 'Stakkevollan', 'routes' : ['32']},
	{'name' : 'Universitet', 'routes' : ['32']},
];

dictBusStops['Slettaelva'] = [
	{'name' : 'Giæverbukta', 'routes' : ['40']},
	{'name' : 'Workinnmarka', 'routes' : ['40']},
	{'name' : 'Sentrum', 'routes' : ['40']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['40']},
	{'name' : 'Myreng', 'routes' : ['40']}
];

dictBusStops['Workinnmarka'] = [
	{'name' : 'Giæverbukta', 'routes' : ['40']},
	{'name' : 'Slettaelva', 'routes' : ['40']},
	{'name' : 'Sentrum', 'routes' : ['40']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['40']},
	{'name' : 'Myreng', 'routes' : ['40']}
];

// TODO fix routes
dictBusStops['Kroken'] = [
	{'name' : 'Stakkevollan', 'routes' : ['20']},
	{'name' : 'Sentrum', 'routes' : ['20']},
	{'name' : 'Tomasjord', 'routes' : ['20']},
	{'name' : 'Tromsdalen', 'routes' : ['20']},
	{'name' : 'Lunheim', 'routes' : ['20']},
	{'name' : 'Universitet', 'routes' : ['20']},
	{'name' : 'UNN', 'routes' : ['20']},
	{'name' : 'Tromsdalen', 'routes' : ['20']}
];
dictBusStops['Giæverbukta'] = [
	{'name' : 'Stakkevollan', 'routes' : ['42']},
	{'name' : 'Telegrafbukta', 'routes' : ['34']},
	{'name' : 'Sentrum', 'routes' : ['42']},
	{'name' : 'Tomasjord', 'routes' : ['24']},
	{'name' : 'Universitet', 'routes' : ['34']},
	{'name' : 'Tromsdalen', 'routes' : ['24']}
	{'name' : 'Mortensnes', 'routes' : ['24', '34']}
	{'name' : 'UNN', 'routes' : ['34', '22']}
	{'name' : 'Solligården', 'routes' : ['28']}
	{'name' : 'Eidkjosen', 'routes' : ['42', '425', '420']}
	{'name' : 'Workinnmarka', 'routes' : ['40']},
	{'name' : 'Kroken Sør', 'routes' : ['24']},
	{'name' : 'Reinen', 'routes' : ['28']},
	{'name' : 'Gammelgård', 'routes' : ['28']},
	{'name' : 'Storelva', 'routes' : ['42']},
	{'name' : 'Slettaelva', 'routes' : ['40']},
	{'name' : 'Fargereng', 'routes' : ['34']},
	{'name' : 'Myreng', 'routes' : ['26']},
	{'name' : 'Elverhøy', 'routes' : ['26']},
	{'name' : 'Åsgård', 'routes' : ['26', '34']},
	{'name' : 'Hamna', 'routes' : ['28']},
];

dictBusStops['Åsgård'] = [
	{'name' : 'Giæverbukta', 'routes' : ['26']},
	{'name' : 'Elverhøy', 'routes' : ['26']},
	{'name' : 'Sentrum', 'routes' : ['26']},
	{'name' : 'Tromsdalen', 'routes' : ['26']},
	{'name' : 'Myreng', 'routes' : ['26']}
];

dictBusStops['Tromsø Museum'] = [
	{'name' : 'Sentrum', 'routes' : ['37']}
];

dictBusStops['Telegrafbukta'] = [
	{'name' : 'Åsgård', 'routes' : ['34']},
	{'name' : 'Fagereng', 'routes' : ['34']},
	{'name' : 'Giæverbukta', 'routes' : ['34']},
	{'name' : 'Universitet', 'routes' : ['34']},
	{'name' : 'Sentrum', 'routes' : ['34']}
];

dictBusStops['Tromsø Lufthavn'] = [
	{'name' : 'Giæverbukta', 'routes' : ['40', '42']},
	{'name' : 'Workinnmarka', 'routes' : ['40']},
	{'name' : 'Sentrum', 'routes' : ['40', '42']},
	{'name' : 'Myreng', 'routes' : ['40']},
	{'name' : 'Stakkevollan', 'routes' : ['42']},

];

// TODO fix routes
dictBusStops['Kroken Sør'] = [
	{'name' : 'Giæverbukta', 'routes' : ['24']},
	{'name' : 'Sentrum', 'routes' : ['24']},
	{'name' : 'Mortensnes', 'routes' : ['24']},
	{'name' : 'Lunheim', 'routes' : ['24']},
	{'name' : 'Tomasjord', 'routes' : ['24']},
	{'name' : 'Tromsdalen', 'routes' : ['24']},
	{'name' : 'Giæverbukta', 'routes' : ['24']},
];

dictBusStops['Mortensnes'] = [
	{'name' : 'Giæverbukta', 'routes' : ['24', '24']},
	{'name' : 'Sentrum', 'routes' : ['24', '24']},
	{'name' : 'Kroken Sør', 'routes' : ['24']},
	{'name' : 'Lunheim', 'routes' : ['24']},
	{'name' : 'Tomasjord', 'routes' : ['24']},
	{'name' : 'Tromsdalen', 'routes' : ['24']},
];

dictBusStops['Fagereng'] = [
	{'name' : 'Åsgård', 'routes' : ['34']},
	{'name' : 'Telegrafbukta', 'routes' : ['34']},
	{'name' : 'Giæverbukta', 'routes' : ['34']},
	{'name' : 'Universitet', 'routes' : ['34']},
	{'name' : 'Sentrum', 'routes' : ['34']}
];

dictBusStops['Lunheim'] = [
	{'name' : 'Giæverbukta', 'routes' : ['24', '20']},
	{'name' : 'Sentrum', 'routes' : ['24','20']},
	{'name' : 'Mortensnes', 'routes' : ['24']},
	{'name' : 'Kroken Sør', 'routes' : ['24']},
	{'name' : 'Tomasjord', 'routes' : ['24','20']},
	{'name' : 'Tromsdalen', 'routes' : ['24','20']},
	{'name' : 'Giæverbukta', 'routes' : ['24','20']},
	{'name' : 'Stakkevollan', 'routes' : ['20']},
	{'name' : 'Universitet', 'routes' : ['20']},

];

dictBusStops['Tomasjord'] = [
	{'name' : 'Giæverbukta', 'routes' : ['24', '20']},
	{'name' : 'Sentrum', 'routes' : ['24','20']},
	{'name' : 'Mortensnes', 'routes' : ['24']},
	{'name' : 'Kroken Sør', 'routes' : ['24']},
	{'name' : 'Lunheim', 'routes' : ['24','20']},
	{'name' : 'Tromsdalen', 'routes' : ['24','20']},
	{'name' : 'Giæverbukta', 'routes' : ['24','20']},
	{'name' : 'Stakkevollan', 'routes' : ['20']},
	{'name' : 'Universitet', 'routes' : ['20']},

];

dictBusStops['Reinen'] = [
	{'name' : 'Giæverbukta', 'routes' : ['28']},
	{'name' : 'Hamna', 'routes' : ['28']},
	{'name' : 'Sentrum', 'routes' : ['28']},
	{'name' : 'Tromsdalen', 'routes' : ['28']},
	{'name' : 'Solligården', 'routes' : ['28']},
	{'name' : 'Gammelgård', 'routes' : ['28']}
];

dictBusStops['Gammelgård'] = [
	{'name' : 'Giæverbukta', 'routes' : ['28']},
	{'name' : 'Hamna', 'routes' : ['28']},
	{'name' : 'Sentrum', 'routes' : ['28']},
	{'name' : 'Tromsdalen', 'routes' : ['28']},
	{'name' : 'Solligården', 'routes' : ['28']},
	{'name' : 'Reinen', 'routes' : ['28']}
];

// TODO FIX ROUTES
dictBusStops['Myreng'] = [
	{'name' : 'Giæverbukta', 'routes' : ['26', '40']},
	{'name' : 'Sentrum', 'routes' : ['26', '40']},
	{'name' : 'Tromsdalen', 'routes' : ['26']},
	{'name' : 'Elverhøy', 'routes' : ['26']},
	{'name' : 'Åsgård', 'routes' : ['26']}
]
// Todo FIX ROUTE
dictBusStops['Eidkjosen'] = [
	{'name' : 'Giæverbukta', 'routes' : ['42']},
	{'name' : 'Sentrum', 'routes' : ['42']},
	{'name' : 'Storelva', 'routes' : ['42']},
];

// TODO FIX ROUTES
dictBusStops['UNN'] = [
	{'name' : 'Sentrum', 'routes' : ['20', '32']},
	{'name' : 'Giæverbukta', 'routes' : ['22']},
	{'name' : 'Tromsdalen', 'routes' : ['20']},
	{'name' : 'Kroken', 'routes' : ['20']},
	{'name' : 'Stakkevollan', 'routes' : ['20']},
	{'name' : 'Lunheim', 'routes' : ['20']},
	{'name' : 'Tomasjord', 'routes' : ['20']},
];

dictBusStops['Elverhøy'] = [
	{'name' : 'Giæverbukta', 'routes' : ['26']},
	{'name' : 'Åsgård', 'routes' : ['26']},
	{'name' : 'Sentrum', 'routes' : ['26']},
	{'name' : 'Tromsdalen', 'routes' : ['26']},
	{'name' : 'Myreng', 'routes' : ['26']}
];
dictBusStops['Solligården'] = [
	{'name' : 'Giæverbukta', 'routes' : ['28']},
	{'name' : 'Hamna', 'routes' : ['28']},
	{'name' : 'Sentrum', 'routes' : ['28']},
	{'name' : 'Tromsdalen', 'routes' : ['28']},
	{'name' : 'Gammelgård', 'routes' : ['28']},
	{'name' : 'Reinen', 'routes' : ['28']}
];


everyBusStopToParse = Object.keys(dictBusStops);

// TODO correct this IDs and real names
realNames = {};
realNames['Stakkevollan'] = "Utsikten";
realNames['Sentrum'] = 'Wito';
realNames['Tromsdalen'] = "Tromsdalen Bruvegen";
realNames['Storelva'] = "Storelv snuplass";
realNames['Universitet'] = "UiTø/ISV";
realNames['UNN'] = "Universitetssykehuset";
realNames['Giæverbukta'] = 'Giæverbukta';
realNames['Kroken'] = 'Kroken';
realNames['Tromsø Lufthavn'] = "Tromsø Lufthavn";

//{"Fr. Langes gate F1 (Tromsø)" : '19021017'};

exports.realNames = realNames;
exports.dictBusStops = dictBusStops;
exports.busStops = busStops;
exports.everyBusStopToParse = everyBusStopToParse;
exports.endRootUrl = endRootUrl;
exports.firstRootUrl = firstRootUrl;
exports.officalEndDate = officalEndDate;
exports.officalStartDate = officalStartDate;

