rutevogn
========

1. Download MongoDB
2. Install node modules: inside root folder (where .git is) run "npm install". Installs all packages listed in package.json
3. Start server with: "node server.js"
4. Edit parsing/RUN.py to have the correct paths. Uncommenting the listed one will do. Run parser from root: python parsing/RUN.py
5. Make very fancy features that will blow your socks off.



--- PARSER ----

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



Crontab config:
```bash
0 2 * * * python /root/rutevogn//parsing/RUN.py > /dev/null 2>&1 
@reboot /usr/bin/forever start /root/rutevogn/server.js
```
