var firstRootUrl = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/svar?referrer=www.tromskortet.no&lang=no&dep1=&";
var endRootUrl = "&direction=1&search=S%C3%B8k&GetTR0=1&GetTR1=1&GetTR2=1&GetTR3=1&GetTR4=1&GetTR6=1&through=&throughpause=&changepenalty=1&changepause=0&linjer=&destinations=";


var officalStartDate = new Date();
var officalEndDate = new Date(officalStartDate.getTime() + 43200000);

dictBusStops = {};
startDate = new Date();

busStops = [
    {
            'name' : 'Sentrum',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 0
    },
    {
            'name' : 'Giæverbukta',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 1
    },
    {
            'name' : 'UiT',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 2
    },
    {
            'name' : 'UNN',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 3
    },
    {
            'name' : 'Doktordalen',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 4
    },
    {
            'name' : 'Eidkjosen',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 5
    },
    {
            'name' : 'Elverhøy',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 6
    },
	{
            'name' : 'Fagereng',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 7
    },
    {
            'name' : 'Gammelgård',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 8
    },
    {
            'name' : 'Hamna',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 9
    },
    {
            'name' : 'Kroken',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 10

    },
    {
            'name' : 'Kroken Sør',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 11
    },
    {
            'name' : 'Kræmer',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 12
    },
    {
            'name' : 'Lunheim',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 13
    },
    {
            'name' : 'Mortensnes',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 14
    },
    {
            'name' : 'Myreng',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 15
    },
    {
            'name' : 'Prestvannet',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 16
    },
    {
            'name' : 'Reinen',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 17
    },
    {
            'name' : 'Skoglyst',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 18
    },
    {
            'name' : 'Slettaelva',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 19
    },
    {
            'name' : 'Solligården',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 20
    },
    {
            'name' : 'Stakkevollan',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 21
    },
    {
            'name' : 'Storelva',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 22
    },
    {
            'name' : 'Telegrafbukta',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 23
    },
    {
            'name' : 'Tomasjordnes',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 24
    },
    {
            'name' : 'Tromsdalen',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 25
    },
    {
            'name' : 'Tromsø Lufthavn',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 26
    },
    {
            'name' : 'Tromsø Museum',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 27
    },
    {
            'name' : 'Workinnmarka',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 28
    },
    {
            'name' : 'Åsgård',
            'city' : 'Tromsø',
            'destinations' : [],
            'sort_id' : 29
    },
];

dictBusStops = {};

/* -----------  Kvaløya -----------  */

dictBusStops['Eidkjosen'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Storelva', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Stakkevollan','routes' : ['Stakkevollan:42']},
	{'name' : 'Kræmer','routes' : ['Stakkevollan:42']},
];

dictBusStops['Slettaelva'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Sentrum:40']},
	{'name' : 'Workinnmarka', 'routes' : ['Sentrum:40']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:40', 'Sentrum:41']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Sentrum:40']},
	{'name' : 'Myreng', 'routes' : ['Sentrum:40']},
	{'name' : 'Prestvannet', 'routes' : ['Sentrum:40']},

];

dictBusStops['Storelva'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Giæverbukta', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Stakkevollan:42']},
	{'name' : 'UiT', 'routes' : ['Breivika:43']},
	{'name' : 'Eidkjosen', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Kræmer','routes' : ['Stakkevollan:42']},
];


/*  -----------  Nord øya ----------- */

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
	{'name' : 'Kræmer','routes' : ['Sentrum:32']},
	{'name' : 'Prestvannet', 'routes' : ['Solligården:28']},	
];

dictBusStops['Stakkevollan'] = [
	{'name' : 'Sentrum', 'routes' : ['Kroken:20', 'Eidkjosen:42', 'Sentrum:32', 'Steinnes:20']},
	{'name' : 'UiT', 'routes' : ['Kroken:20', 'Sentrum:32', 'Steinnes:20']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken:20']},
	{'name' : 'Kroken', 'routes' : ['Kroken:20']},
	{'name' : 'Giæverbukta', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Lunheim', 'routes' : ['Kroken:20']},
	{'name' : 'Tomasjordnes', 'routes' : ['Kroken:20']},
	{'name' : 'UNN', 'routes' : ['Kroken:20', 'Sentrum:32', 'Steinnes:20']},
	{'name' : 'Hamna', 'routes' : ['Hamna sør:32']},
	{'name' : 'Storelva', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Kræmer','routes' : ['Eidkjosen:42']},
	{'name' : 'Doktordalen','routes' : ['Kroken:20']},		
];


dictBusStops['UNN'] = [
	{'name' : 'Sentrum', 'routes' : ['Kroken:20', 'Hamna sør:32']},
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:22', 'Sentrum:34']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken:20']},
	{'name' : 'Kroken', 'routes' : ['Kroken:20']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Lunheim', 'routes' : ['Kroken:20']},
	{'name' : 'Tomasjordnes', 'routes' : ['Kroken:20']},
	{'name' : 'Skoglyst', 'routes' : ['Skoglyst:36']},
	{'name' : 'Åsgård', 'routes' : ['Skoglyst:36']},
	{'name' : 'Elverhøy', 'routes' : ['Skoglyst:36']},
	{'name' : 'Kræmer','routes' : ['Sentrum:32']},
	{'name' : 'Doktordalen','routes' : ['Kroken:20']},	


];

dictBusStops['UiT'] = [
	{'name' : 'Sentrum', 'routes' : ['Kroken:20', 'Polaria:21', 'Sentrum:32', 'Steinnes:20']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken:20']},
	{'name' : 'Tomasjordnes', 'routes' : ['Kroken:20']},
	{'name' : 'Giæverbukta', 'routes' : ['Sentrum:34']},
	{'name' : 'Fagereng', 'routes' : ['Sentrum:34']},
	{'name' : 'Telegrafbukta', 'routes' : ['Sentrum:34']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20', "Hamna sør:32"]},
	{'name' : 'Skoglyst', 'routes' : ['Skoglyst:36']},
	{'name' : 'Åsgård', 'routes' : ['Skoglyst:36']},
	{'name' : 'Elverhøy', 'routes' : ['Skoglyst:36']},
	{'name' : 'Kroken', 'routes' : ['Kroken:20']},
	{'name' : 'Kræmer','routes' : ['Sentrum:32']},
	{'name' : 'Doktordalen', 'routes' : ['Kroken:20']},
	{'name' : 'Eidkjosen', 'routes' : ['Eidkjosen:43']},
	{'name' : 'Storelva', 'routes' : ['Eidkjosen:43']},
];

dictBusStops['Mortensnes'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Sentrum', 'routes' : ['Kroken sør:24']},
	{'name' : 'Kroken Sør', 'routes' : ['Kroken sør:24']},
	{'name' : 'Lunheim', 'routes' : ['Kroken sør:24']},
	{'name' : 'Tomasjordnes', 'routes' : ['Kroken sør:24']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken sør:24']},
	{'name' : 'Doktordalen','routes' : ['Kroken sør:24']},
];

/* ---------- Vest øya ---------- */

dictBusStops['Tromsø Lufthavn'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Sentrum:40', 'Stakkevollan:42']},
	{'name' : 'Workinnmarka', 'routes' : ['Sentrum:40']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:40', 'Stakkevollan:42']},
	{'name' : 'Myreng', 'routes' : ['Sentrum:40']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Kræmer','routes' : ['Stakkevollan:42']},
	{'name' : 'Prestvannet', 'routes' : ['Sentrum:40']},
];

dictBusStops['Giæverbukta'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42']},
	{'name' : 'Telegrafbukta', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:42', 'Sentrum:40', 'Sentrum:34', 'Kroken sør:24', 'Pyramiden:26', 'Solligården:28']},
	{'name' : 'Tomasjordnes', 'routes' : ['Kroken sør:24']},
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
	{'name' : 'Skoglyst', 'routes' : ['Pyramiden:26']},
	{'name' : 'Kræmer','routes' : ['Stakkevollan:42']},
	{'name' : 'Doktordalen','routes' : ['Kroken sør:24']},
	{'name' : 'Prestvannet', 'routes' : ['Solligården:28','Sentrum:40']},
];

dictBusStops['Workinnmarka'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Slettaelva:40']},
	{'name' : 'Slettaelva', 'routes' : ['Slettaelva:40']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:40']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Slettaelva:40']},
	{'name' : 'Myreng', 'routes' : ['Sentrum:40']},
	{'name' : 'Prestvannet', 'routes' : ['Sentrum:40']},
];

/*  Midt øya */

dictBusStops['Doktordalen'] = [
	{'name' : 'Sentrum', 'routes' : ['Kroken:20', 'Polaria:21', 'Kroken sør:24', 'Sentrum:32', 'Steinnes:20']},
	{'name' : 'Tromsdalen', 'routes' : ['Kroken:20', 'Kroken sør:24']},
	{'name' : 'Tomasjordnes', 'routes' : ['Kroken:20']},
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UNN', 'routes' : ['Stakkevollan:20', 'Forskningsparken:21']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20', 'Forskningsparken:21']},
	{'name' : 'Kroken Sør', 'routes' : ['Kroken sør:24']},
	{'name' : 'Kroken', 'routes' : ['Kroken:20']},
	{'name' : 'Mortensnes', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Lunheim', 'routes' : ['Kroken sør:24']},
];

dictBusStops['Kræmer'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42', 'Hamna sør:32']},
	{'name' : 'Sentrum', 'routes' : ['Eidkjosen:42', 'Sentrum:32']},
	{'name' : 'Giæverbukta', 'routes' : ['Eidkjosen:42']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Eidkjosen:42']},
	{'name' : 'UNN', 'routes' : ['Breivika:43', 'Hamna sør:32']},
	{'name' : 'UiT', 'routes' : ['Hamna sør:32']},
	{'name' : 'Hamna', 'routes' : ['Hamna sør:32']},
	{'name' : 'Eidkjosen', 'routes' : ['Eidkjosen:42']},
];

dictBusStops['Åsgård'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Elverhøy', 'routes' : ['Pyramiden:26', 'Skoglyst:36']},
	{'name' : 'Sentrum', 'routes' : ['Pyramiden:26', 'Sentrum:34']},
	{'name' : 'Tromsdalen', 'routes' : ['Pyramiden:26']},
	{'name' : 'Myreng', 'routes' : ['Pyramiden:26']},
	{'name' : 'UiT', 'routes' : ['Universitetssykehuset:34', 'Universitetssykehuset:36']},
	{'name' : 'UNN', 'routes' : ['Universitetssykehuset:34', 'Universitetssykehuset:36']},
	{'name' : 'Skoglyst', 'routes' : ['Skoglyst:36', 'Pyramiden:26']},
];


dictBusStops['Myreng'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26', 'Slettaelva:40']},
	{'name' : 'Sentrum', 'routes' : ['Pyramiden:26', 'Sentrum:40']},
	{'name' : 'Tromsdalen', 'routes' : ['Pyramiden:26']},
	{'name' : 'Elverhøy', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Åsgård', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Prestvannet', 'routes' : ['Slettaelva:40']},
];

dictBusStops['Skoglyst'] = [
	{'name' : 'UNN', 'routes' : ['Universitetssykehuset:36']},
	{'name' : 'UiT', 'routes' : ['Universitetssykehuset:36']},
	{'name' : 'Åsgård', 'routes' : ['Universitetssykehuset:36', 'Giæverbukta:26']},
	{'name' : 'Elverhøy', 'routes' : ['Universitetssykehuset:36', 'Giæverbukta:26']},
	{'name' : 'Sentrum', 'routes' : ['Pyramiden:26']},
	{'name' : 'Tromsdalen', 'routes' : ['Pyramiden:26']},
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26']}
];

dictBusStops['Prestvannet'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Bjørnebekken:28','Slettaelva:40']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Slettaelva', 'routes' : ['Slettaelva:40']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:40','Solligården:28']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Slettaelva:40']},
	{'name' : 'Myreng', 'routes' : ['Sentrum:40']},
	{'name' : 'Reinen', 'routes' : ['Solligården:28']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Gammelgård', 'routes' : ['Solligården:28']},
	{'name' : 'Tromsdalen', 'routes' : ['Solligården:28']},
	{'name' : 'Workinnmarka', 'routes' : ['Slettaelva:40']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
];


dictBusStops['Sentrum'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:42', 'Stakkevollan:20']},
	{'name' : 'Telegrafbukta', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Giæverbukta', 'routes' : ['Eidkjosen:42', 'Slettaelva:40', 'Universitetssykehuset:34', 'Giæverbukta:24', 'Giæverbukta:26', 'Bjørnebekken:28']},
	{'name' : 'Tomasjordnes', 'routes' : ['Kroken:20', 'Kroken sør:24']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20', 'Hamna sør:32', 'Forskningsparken:21']},
	{'name' : 'Tromsdalen', 'routes' : ['Pyramiden:26', 'Kroken:20', 'Solligården:28', 'Kroken sør:24']},
	{'name' : 'Mortensnes', 'routes' : ['Giæverbukta:24', 'Universitetssykehuset:34']},
	{'name' : 'UNN', 'routes' : ['Hamna sør:32', 'Stakkevollan:20']},
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
	{'name' : 'Tromsø Museum', 'routes' : ['Tromsø Museum:37']},
	{'name' : 'Myreng', 'routes' : ['Giæverbukta:26', 'Slettaelva:40']},
	{'name' : 'Elverhøy', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Tromsø Lufthavn', 'routes' : ['Eidkjosen:42', 'Slettaelva:40']},
	{'name' : 'Kræmer', 'routes' : ['Bjørnebekken:32', 'Stakkevollan:42']},
	{'name' : 'Doktordalen','routes' : ['Stakkevollan:20', 'Giæverbukta:24']},
	{'name' : 'Prestvannet', 'routes' : ['Bjørnebekken:28','Slettaelva:40']},
];

/*  ----------- Sør øya ----------- */

dictBusStops['Elverhøy'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26']},
	{'name' : 'Åsgård', 'routes' : ['Giæverbukta:26', 'Universitetssykehuset:36']},
	{'name' : 'Sentrum', 'routes' : ['Pyramiden:26']},
	{'name' : 'Tromsdalen', 'routes' : ['Pyramiden:26']},
	{'name' : 'Myreng', 'routes' : ['Pyramiden:26']},
	{'name' : 'Skoglyst', 'routes' : ['Skoglyst:36', 'Pyramiden:26']},
	{'name' : 'UNN', 'routes' : ['Universitetssykehuset:36']},
	{'name' : 'UiT', 'routes' : ['Universitetssykehuset:36']},
];

dictBusStops['Fagereng'] = [
	{'name' : 'Åsgård', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Telegrafbukta', 'routes' : ['Sentrum:34']},
	{'name' : 'Giæverbukta', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'UiT', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:34']}
];

dictBusStops['Tromsø Museum'] = [
	{'name' : 'Sentrum', 'routes' : ['Sentrum:37']}
];

dictBusStops['Telegrafbukta'] = [
	{'name' : 'Åsgård', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Fagereng', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Giæverbukta', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'UiT', 'routes' : ['Universitetssykehuset:34']},
	{'name' : 'Sentrum', 'routes' : ['Sentrum:34']}
];


/* ---------- FastLandet ----------- */

dictBusStops['Solligården'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Sentrum', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Tromsdalen', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Gammelgård', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Reinen', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Prestvannet', 'routes' : ['Bjørnebekken:28']},
];

dictBusStops['Gammelgård'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Sentrum', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Tromsdalen', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Reinen', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Prestvannet', 'routes' : ['Bjørnebekken:28']},
];

dictBusStops['Reinen'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Hamna', 'routes' : ['Bjørnebekken:28']},
	{'name' : 'Sentrum', 'routes' : ['Solligården:28']},
	{'name' : 'Tromsdalen', 'routes' : ['Solligården:28']},
	{'name' : 'Solligården', 'routes' : ['Solligården:28']},
	{'name' : 'Gammelgård', 'routes' : ['Solligården:28']},
	{'name' : 'Prestvannet', 'routes' : ['Bjørnebekken:28']},
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
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:26', '24', 'Bjørnebekken:28']},
	{'name' : 'Doktordalen','routes' : ['Stakkevollan:20', 'Giæverbukta:24']},
	{'name' : 'Prestvannet', 'routes' : ['Bjørnebekken:28']},
];

dictBusStops['Tomasjordnes'] = [
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Kroken', 'routes' : ['Kroken:20']},
	{'name' : 'Tromsdalen', 'routes' : ["Stakkevollan:20", "Universitetssykehuset:20"]},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20', 'Universitetssykehuset:20']},
	{'name' : 'UNN', 'routes' : ['Stakkevollan:20', 'Universitetssykehuset:20']},
	{'name' : 'Doktordalen','routes' : ['Stakkevollan:20']},
];

dictBusStops['Lunheim'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Sentrum', 'routes' : ['Giæverbukta:24', 'Stakkevollan:20']},
	{'name' : 'Mortensnes', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Tromsdalen', 'routes' : ['Giæverbukta:24', "Stakkevollan:20", "Universitetssykehuset:20"]},
	{'name' : 'Kroken', 'routes' : ['Kroken:20', 'Steinnes:20']},
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20', 'Universitetssykehuset:20']},
	{'name' : 'UNN', 'routes' : ['Stakkevollan:20', 'Universitetssykehuset:20']},
	{'name' : 'Doktordalen','routes' : ['Giæverbukta:24']},
];

dictBusStops['Kroken Sør'] = [
	{'name' : 'Giæverbukta', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Sentrum', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Mortensnes', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Lunheim', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Tromsdalen', 'routes' : ['Giæverbukta:24']},
	{'name' : 'Doktordalen','routes' : ['Giæverbukta:24']},
];

dictBusStops['Kroken'] = [
	{'name' : 'Stakkevollan', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Sentrum', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Tomasjordnes', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Tromsdalen', 'routes' : ['Stakkevollan:20']},
	{'name' : 'Lunheim', 'routes' : ['Stakkevollan:20']},
	{'name' : 'UiT', 'routes' : ['Stakkevollan:20', 'Universitetssykehuset:20']},
	{'name' : 'UNN', 'routes' : ['Stakkevollan:20', 'Universitetssykehuset:20']},
	{'name' : 'Doktordalen','routes' : ['Giæverbukta:24']},
];




everyBusStopToParse = Object.keys(dictBusStops);

// TODO correct this IDs and real names
realNames = {};
realNames['Stakkevollan'] = ["Utsikten"];
realNames['Sentrum'] = ["Fr. Langes gate F1", "Fr. Langes gate F2", "Fr. Langes gate F3",
"Fr. Langes gate F4", "Fr. Langes gate F5", "Fr. Langes gate F6", "Fr. Langes gate F7", "Sjøgata S1",
"Sjøgata S2", "Sjøgata S3", "Sjøgata S4", "Havnegata H1", "Havnegata H2", "Havnegata H3"];
realNames['Tromsdalen'] = ["Tromsdalen Bruvegen", "Tromsdalen kirke"];
realNames['Storelva'] = ["Storelv snuplass"];
realNames['UiT'] = ["UiT"];
realNames['UNN'] = ["Universitetssykehuset"];
realNames['Giæverbukta'] = ['Giæverbukta'];
realNames['Kroken'] = ['Krokensenteret'];
realNames['Tromsø Lufthavn'] = ["Flyplassen"];
realNames['Hamna'] = ["Hamna skole øst"];
realNames['Slettaelva'] = ["Slettaelva skole"];
realNames['Workinnmarka'] = ["Workinnmarka skole"];
realNames['Åsgård'] = ["UNN, Åsgård", "Åsgård"];
realNames['Tromsø Museum'] = ["Tromsø Museum"];
realNames['Telegrafbukta'] = ["Telegrafbukta"];
realNames['Kroken Sør'] = ["Kroken sykehjem"];
realNames['Mortensnes'] = ["Maskinistvegen"];
realNames['Fagereng'] = ["Alaskasvingen"];
realNames['Lunheim'] = ["Lunheim skole", "Lunheim vest"];
realNames['Tomasjordnes'] = ["Tomasjordnes"];
realNames['Reinen'] = ["Reinen"];
realNames['Gammelgård'] = ["Gammelgård"];
realNames['Myreng'] = ["Trykkbassenget"];
realNames['Eidkjosen'] = ["Eidkjosen"];
realNames['UNN'] = ["Universitetssykehuset"];
realNames['Elverhøy'] = ["Elverhøy"];
realNames['Solligården'] = ["Solligården"];
realNames['Skoglyst'] = ["Skoglyst"];
realNames['Doktordalen'] = ["Doktordalen"];
realNames['Kræmer'] = ['Kræmer'];
realNames['Prestvannet'] = ['Prestvannet'];

exports.realNames = realNames;
exports.dictBusStops = dictBusStops;
exports.busStops = busStops;
exports.everyBusStopToParse = everyBusStopToParse;
exports.endRootUrl = endRootUrl;
exports.firstRootUrl = firstRootUrl;
exports.officalEndDate = officalEndDate;
exports.officalStartDate = officalStartDate;
