import subprocess
import datetime

todays_date = datetime.datetime.now().date()
future_date = (datetime.datetime.now() + datetime.timedelta(days=4)).date()

# subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/cleanUp.js"])
# subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/setUp.js"])
# subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/parseXML.js", str(todays_date), str(future_date)])


subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js"])
subprocess.call(["node", "parsing/parseXML.js", str(todays_date), str(future_date)])
