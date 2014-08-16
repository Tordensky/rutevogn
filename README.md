rutevogn
========

Crontab jobs put on server
0 2 * * * python /home/rutevogn/rutevogn/parsing/RUN.py > /dev/null 2>&1 
@reboot /usr/bin/forever start /home/rutevogn/rutevogn/server.js
