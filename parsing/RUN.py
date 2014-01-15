import subprocess
import datetime

subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/cleanUp.js"])
subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/setUp.js"])
subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/parseXML.js", "2014-1-15", "2014-1-30"])

todays_date = datetime.datetime.now().date()
future_date = (datetime.datetime.now() + datetime.timedelta(days=4)).date()

subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js"])
subprocess.call(["node", "parsing/parseXML.js", todays_date, future_date])