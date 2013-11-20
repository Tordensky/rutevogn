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
            'name' : 'UiT',
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
	{'name' : 'Sentrum', 'routes' : ['Kroken:20', 'Eidkjosen:42', 'Sentrum:32']},
	{'name' : 'UiT', 'routes' : ['Kroken:20', 'Sentrum:32']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken:20']},
	{'name' : 'Kroken', 'routes' : ['Kroken:20']},
	{'name' : 'Giæverbukta', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Lunheim', 'routes' : ['Kroken:20']},
	{'name' : 'Tomasjord', 'routes' : ['Kroken:20']},
	{'name' : 'UNN', 'routes' : ['Kroken:20', 'Sentrum:32']},
	{'name' : 'Hamna', 'routes' : ['Hamna sør:32']}
]

dictBusStops['Sentrum'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42', 'Stakkevollan:20']},
	{'name' : 'Telegrafbukta', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Giæverbukta', 'routes' : ['Eidkjosen:42', 'Slettaelva:40', 'Universitetssykehuset:34', 'Giæverbukta:24', 'Giæverbukta:26', 'Bjørnevekken:28']},
	{'name' : 'Tomasjord', 'routes' : ['Kroken:20', 'Kroken sør:24']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20', 'Universitetssykehuset:34']},
	{'name' : 'Tromsdalen', 'routes' : ['Pyramiden:26', 'Kroken:20', 'Solligården:28', 'Kroken sør:24']},
	{'name' : 'Mortensnes', 'routes' : ['Giæverbukta:24', 'Universitetssykehuset:34']},
	{'name' : 'UNN', 'routes' : ['Universitetssykehuset:34', 'Stakkevollan:20']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Eidkjosen', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Workinnmarka', 'routes' : ['Slettaelva:40']},
	{'name' : 'Kroken Sør', 'routes' : ['Kroken sør:24']},
	{'name' : 'Reinen', 'routes' : ['Solligården:28']},
	{'name' : 'Gammelgård', 'routes' : ['Solligården:28']},
	{'name' : 'Storelva', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Slettaelva', 'routes' : ['Slettaelva:40']},
	{'name' : 'Fagereng', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Åsgård', 'routes' : ['Giæverbukta:26', 'Universitetssykehuset:34']},
	{'name' : 'Tromsø Museum', 'routes' : ['Røstbakktoppen:37']},
	{'name' : 'Myreng', 'routes' : ['Giæverbukta:26', 'Slettaelva:40']},
	{'name' : 'Elverhøy', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']}
];
dictBusStops['Tromsdalen'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:20', 'Giæverbukta:24', 'Giæverbukta:26', 'Bjørnebekken:28']},
	{'name' : 'Åsgård', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Reinen', 'routes' : ['Solligården:28']},
	{'name' : 'Gammelgård', 'routes' : ['Solligården:28']},
	{'name' : 'Myreng', 'routes' : ['Giæverbukta:26']},
	{'name' : 'UNN', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Elverhøy', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26', '24', 'Bjørnebekken:28']}
];

dictBusStops['Storelva'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Giæverbukta', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Stakkevollan:42']},
	{'name' : 'UNN', 'routes' : ['Breivika:43']},
];

dictBusStops['UiT'] = [
	{'name' : 'Sentrum', 'routes' : ['Kroken:20', 'Polaria:21', 'Sentrum:32']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken:20']},
	{'name' : 'Tomasjord', 'routes' : ['Kroken:20']},
	{'name' : 'Giæverbukta', 'routes' : ['Sentrum:34']},
	{'name' : 'Fagereng', 'routes' : ['Sentrum:34']},
	{'name' : 'Telegrafbukta', 'routes' : ['Sentrum:34']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
];

dictBusStops['Hamna'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Solligården:28']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:32', 'Solligården:28']},
	{'name' : 'Reinen', 'routes' : ['Solligården:28']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Gammelgård', 'routes' : ['Solligården:28']},
	{'name' : 'Tromsdalen', 'routes' : ['Solligården:28']},
	{'name' : 'UNN', 'routes' : ['Sentrum:32']},
	{'name' : 'Stakkevollan', 'routes' : ['Sentrum:32']},
	{'name' : 'UiT', 'routes' : ['Sentrum:32']},
];

dictBusStops['Slettaelva'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Sentrum:40']},
	{'name' : 'Workinnmarka', 'routes' : ['Sentrum:40']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:40']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Sentrum:40']},
	{'name' : 'Myreng', 'routes' : ['Sentrum:40']}
];

dictBusStops['Workinnmarka'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Slettaelva:40']},
	{'name' : 'Slettaelva', 'routes' : ['Slettaelva:40']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:40']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Slettaelva:40']},
	{'name' : 'Myreng', 'routes' : ['Sentrum:40']}
];

dictBusStops['Kroken'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Tomasjord', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Tromsdalen', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Lunheim', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UNN', 'routes' : ['Stakkevollan:20']}
];

dictBusStops['Giæverbukta'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Telegrafbukta', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:42', 'Sentrum:40', 'Sentrum:34', 'Kroken sør:24', 'Pyramiden:26', 'Solligården:28']},
	{'name' : 'Tomasjord', 'routes' : ['Kroken sør:24']},
	{'name' : 'UiT', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken sør:24']},
	{'name' : 'Mortensnes', 'routes' : ['Kroken sør:24', 'Universitetssykehuset:34']},
	{'name' : 'UNN', 'routes' : ['Universitetssykehuset:34', 'Kroken:22']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Eidkjosen', 'routes' : ['Eidkjosen:42', '425']},
	{'name' : 'Workinnmarka', 'routes' : ['Sentrum:40']},
	{'name' : 'Kroken Sør', 'routes' : ['Kroken sør:24']},
	{'name' : 'Reinen', 'routes' : ['Solligården:28']},
	{'name' : 'Gammelgård', 'routes' : ['Solligården:28']},
	{'name' : 'Storelva', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Slettaelva', 'routes' : ['Slettaelva:40']},
	{'name' : 'Fagereng', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Myreng', 'routes' : ['Pyramiden:26']},
	{'name' : 'Elverhøy', 'routes' : ['Pyramiden:26']},
	{'name' : 'Åsgård', 'routes' : ['Pyramiden:26', 'Sentrum:34']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
];

dictBusStops['Åsgård'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Elverhøy', 'routes' : ['Tromsdalen:26']},
	{'name' : 'Sentrum', 'routes' : ['Tromsdalen:26']},
	{'name' : 'Tromsdalen', 'routes' : ['Tromsdalen:26']},
	{'name' : 'Myreng', 'routes' : ['Tromsdalen:26']}
];

dictBusStops['Tromsø Museum'] = [
	{'name' : 'Sentrum', 'routes' : ['Røstbakktoppen:37']}
];

dictBusStops['Telegrafbukta'] = [
	{'name' : 'Åsgård', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Fagereng', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Giæverbukta', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'UiT', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:34']}
];

dictBusStops['Tromsø Lufthavn'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Sentrum:40', 'Stakkevollan:42']},
	{'name' : 'Workinnmarka', 'routes' : ['Sentrum:40']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:40', 'Stakkevollan:42']},
	{'name' : 'Myreng', 'routes' : ['Sentrum:40']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42']},
];

// TODO fix routes
dictBusStops['Kroken Sør'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Sentrum', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Mortensnes', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Lunheim', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Tomasjord', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Tromsdalen', 'routes' : ['Giæverbukta:24']},
];

dictBusStops['Mortensnes'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Sentrum', 'routes' : ['Kroken sør:24']},
	{'name' : 'Kroken Sør', 'routes' : ['Kroken sør:24']},
	{'name' : 'Lunheim', 'routes' : ['Kroken sør:24']},
	{'name' : 'Tomasjord', 'routes' : ['Kroken sør:24']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken sør:24']},
];

dictBusStops['Fagereng'] = [
	{'name' : 'Åsgård', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Telegrafbukta', 'routes' : ['Sentrum:34']},
	{'name' : 'Giæverbukta', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'UiT', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:34']}
];

dictBusStops['Lunheim'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Sentrum', 'routes' : ['Giæverbukta:24','Stakkevollan:20']},
	{'name' : 'Mortensnes', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Kroken Sør', 'routes' : ['Kroken sør:24']},
	{'name' : 'Tomasjord', 'routes' : ['Giæverbukta:24','Stakkevollan:20']},
	{'name' : 'Tromsdalen', 'routes' : ['Giæverbukta:24','Stakkevollan:20']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20']},
];

dictBusStops['Tomasjord'] = [
	{'name' : 'Sentrum', 'routes' : ['Giæverbukta:24','Stakkevollan:20']},
	{'name' : 'Mortensnes', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Kroken Sør', 'routes' : ['Kroken sør:24']},
	{'name' : 'Lunheim', 'routes' : ['Kroken sør:24','Kroken:20']},
	{'name' : 'Tromsdalen', 'routes' : ['Giæverbukta:24','Stakkevollan:20']},
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20']},
];

dictBusStops['Reinen'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Sentrum', 'routes' : ['Solligården:28']},
	{'name' : 'Tromsdalen', 'routes' : ['Solligården:28']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Gammelgård', 'routes' : ['Solligården:28']}
];

dictBusStops['Gammelgård'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Sentrum', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Tromsdalen', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Reinen', 'routes' : ['Bjørnebekken:28']}
];

dictBusStops['Myreng'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26', 'Slettaelva:40']},
	{'name' : 'Sentrum', 'routes' : ['Tromsdalen:26', 'Sentrum:40']},
	{'name' : 'Tromsdalen', 'routes' : ['Tromsdalen:26']},
	{'name' : 'Elverhøy', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Åsgård', 'routes' : ['Giæverbukta:26']}
]
dictBusStops['Eidkjosen'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Storelva', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Stakkevollan','routes' : ['Stakkevollan:42']}
];

dictBusStops['UNN'] = [
	{'name' : 'Sentrum', 'routes' : ['Kroken:20', 'Hamna sør:32']},
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:22', 'Sentrum:34']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken:20']},
	{'name' : 'Kroken', 'routes' : ['Kroken:20']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Lunheim', 'routes' : ['Kroken:20']},
	{'name' : 'Tomasjord', 'routes' : ['Kroken:20']},
];

dictBusStops['Elverhøy'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Åsgård', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Sentrum', 'routes' : ['Tromsdalen:26']},
	{'name' : 'Tromsdalen', 'routes' : ['Tromsdalen:26']},
	{'name' : 'Myreng', 'routes' : ['Tromsdalen:26']}
];

dictBusStops['Solligården'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Sentrum', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Tromsdalen', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Gammelgård', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Reinen', 'routes' : ['Bjørnebekken:28']}
];

everyBusStopToParse = Object.keys(dictBusStops);

// TODO correct this IDs and real names
realNames = {};
realNames['Stakkevollan'] = ["Utsikten"];
realNames['Sentrum'] = ['Wito', "Fr. Langes gate F1", "Fr. Langes gate F2", "Fr. Langes gate F3",
"Fr. Langes gate F4", "Fr. Langes gate F5", "Fr. Langes gate F6", "Fr. Langes gate F7", "Sjøgata S1",
"Sjøgata S2", "Sjøgata S3", "Sjøgata S4", "Havnegata H1", "Havnegata H2", "Havnegata H3"];
realNames['Tromsdalen'] = ["Tromsdalen Bruvegen", "Tromsdalen kirke"];
realNames['Storelva'] = ["Storelv snuplass"];
realNames['UiT'] = ["UiTø/ISV"];
realNames['UNN'] = ["Universitetssykehuset"];
realNames['Giæverbukta'] = ['Giæverbukta'];
realNames['Kroken'] = ['Krokensenteret'];
realNames['Tromsø Lufthavn'] = ["Flyplassen"];
realNames['Hamna'] = ["Hamna skole øst"];
realNames['Slettaelva'] = ["Slettaelva skole"];
realNames['Workinnmarka'] = ["Workinnmarka skole"];
realNames['Åsgård'] = ["UNN,Åsgård", "Åsgård"];
realNames['Tromsø Museum'] = ["Tromsø Museum"];
realNames['Telegrafbukta'] = ["Telegrafbukta"];
realNames['Kroken Sør'] = ["Kroken sykehjem"];
realNames['Mortensnes'] = ["Maskinistvegen"];
realNames['Fagereng'] = ["Alaskasvingen"];
realNames['Lunheim'] = ["Lunheim skole"];
realNames['Tomasjord'] = ["Tomasjordnes"];
realNames['Reinen'] = ["Reinen"];
realNames['Gammelgård'] = ["Gammelgård"];
realNames['Myreng'] = ["Trykkbassenget"];
realNames['Eidkjosen'] = ["Eidkjosen"];
realNames['UNN'] = ["Universitetssykehuset"];
realNames['Elverhøy'] = ["Elverhøy"];
realNames['Solligården'] = ["Solligården"];


exports.realNames = realNames;
exports.dictBusStops = dictBusStops;
exports.busStops = busStops;
exports.everyBusStopToParse = everyBusStopToParse;
exports.endRootUrl = endRootUrl;
exports.firstRootUrl = firstRootUrl;
exports.officalEndDate = officalEndDate;
exports.officalStartDate = officalStartDate;

