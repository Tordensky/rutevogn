import subprocess
import datetime

todays_date = datetime.datetime.now().date()
future_date = (datetime.datetime.now() + datetime.timedelta(days=4)).date()

subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/cleanUp.js"])
subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/setUp.js"])
subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/parseXML.js", todays_date, future_date])
