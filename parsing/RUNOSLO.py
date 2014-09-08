import subprocess


# For local testing
subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js", "Oslo"])
subprocess.call(["node", "parsing/insertCities.js"])
subprocess.call(["node", "parsing/parseOslo.js"])

# subprocess.call(["node", "rutevogn/parsing/cleanUp.js"])
# subprocess.call(["node", "rutevogn/parsing/setUp.js"])
# subprocess.call(["node", "rutevogn/parsing/parseXML.js", str(todays_date), str(future_date)])
