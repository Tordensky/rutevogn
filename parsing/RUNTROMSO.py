import subprocess
import datetime

todays_date = datetime.datetime.now().date()
future_date = (datetime.datetime.now() + datetime.timedelta(days=3)).date()


# For local testing
subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js", "Tromso"])
subprocess.call(["node", "parsing/insertCities.js"])
subprocess.call(["node", "parsing/parseTromso.js", str(todays_date), str(future_date)])


# subprocess.call(["node", "/root/new/rutevogn/parsing/cleanUp.js"])
# subprocess.call(["node", "/root/new/rutevogn/parsing/setUp.js", "Tromso"])
# subprocess.call(["node", "/root/new/rutevogn/parsing/setUp.js", "Oslo"])
# subprocess.call(["node", "/root/new/rutevogn/parsing/insertCities.js"])
# subprocess.call(["node", "/root/new/rutevogn/parsing/parseOslo.js", str(todays_date), str(future_date)])
# subprocess.call(["node", "/root/new/rutevogn/parsing/parseTromso.js", str(todays_date), str(future_date)])

