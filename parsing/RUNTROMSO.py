import subprocess
import datetime
import os

todays_date = datetime.datetime.now().date()
future_date = (datetime.datetime.now() + datetime.timedelta(days=3)).date()

path = os.path.dirname(os.path.realpath(__file__))

# For local testing
subprocess.call(["node", path + "/cleanUp.js"])
subprocess.call(["node", path + "/setUp.js", "Tromso"])
subprocess.call(["node", path + "/insertCities.js"])
subprocess.call(["node", path + "/parseTromso.js", str(todays_date), str(future_date)])
