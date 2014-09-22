import subprocess


# For local testing
subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js", "Oslo"])
subprocess.call(["node", "parsing/insertCities.js"])
subprocess.call(["node", "parsing/parseOslo.js"])

# subprocess.call(["node", "/root/new/rutevogn/parsing/cleanUp.js"])
# subprocess.call(["node", "/root/new/rutevogn/parsing/setUp.js", "Oslo"])
# subprocess.call(["node", "/root/new/rutevogn/parsing/insertCities.js"])
# subprocess.call(["node", "/root/new/rutevogn/parsing/parseOslo.js"])
