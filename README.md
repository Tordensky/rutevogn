rutevogn
========

1. Download MongoDB
2. Install node modules: inside root folder (where .git is) run "npm install". Installs all packages listed in package.json
3. Start server with: "node server.js"
4. Edit parsing/RUN.py to have the correct paths. Uncommenting the listed one will do. Run parser from root: python parsing/RUN.py
5. Make very fancy features that will blow your socks off.


Crontab config:
```bash
0 2 * * * python /root/rutevogn//parsing/RUN.py > /dev/null 2>&1 
@reboot /usr/bin/forever start /root/rutevogn/server.js
```
