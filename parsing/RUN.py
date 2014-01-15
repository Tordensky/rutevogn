import subprocess
import datetime

todays_date = datetime.datetime.now().date()
future_date = (datetime.datetime.now() + datetime.timedelta(days=4)).date()

subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js"])
subprocess.call(["node", "parsing/parseXML.js", todays_date, future_date])