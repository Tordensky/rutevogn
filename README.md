Rutevogn
========

A web application that provides a quick and easy way of finding your next bus in Tromsø.

## Inital Setup

1. Install MongoDB: http://www.mongodb.org/downloads

2. Install Node: http://nodejs.org/download/
  - This should give you the "npm" command in your terminal. 

3. Install the node modules for the project. These modules and their specified versions is listed in package.json. These modules will be automaticly installed by typing the command `npm install` inside the root folder

4. Start server by typing the command `node server.js` in the root folder: 

5. Edit parsing/RUN.py to have the correct paths. Uncommenting the listed one will do. Run parser from the root folder with: `python parsing/RUN.py`

6. Make very fancy features that will blow your socks off.

## Bugs and Fixes
TODO: How and where to run the parser if the data is wrong


## Tromskortet API Info

var firstRootUrl = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/v1DepartureXML?"
var urlGetId = "http://rp.tromskortet.no/scripts/TravelMagic/TravelMagicWE.dll/v1PointStageXML?name="


1. First get ID of busstopp with url: urlGetId + realname + "+%28Tromsø%29+%5Bholdeplass%5D";
2. Get avganger with url using id gained in step 1: firstRootUrl + "hpl=" + id + "&Date=" + dateStr;

TIPS:

- All data from the API comes in XML.
- You need realname to find the ID of the busstopp. 
- Parser creates a hash to avoid duplicates. If equal hash as previous route, drop to add it. This is
  set in model/depature-model.js
- config.js contains all stops, realnames etc.

COMMENTS:

Has the ID ever changed? May skip that part of the parser. 


## Production crontab config:
To get the node project to run forever on the apache server we are using the node module forever. This do require some setup to work after reboots in the crontab. Furhtermore we also utilize crontab to be able to run the parser each night at 0300. 

The following two lines of code should be present at the end of the crontab file at the production server:
```
0 2 * * * python /root/rutevogn//parsing/RUN.py > /dev/null 2>&1 
@reboot /usr/bin/forever start /root/rutevogn/server.js
```
