import subprocess
import os

path = os.path.dirname(os.path.realpath(__file__))

subprocess.call(["node", path + "/cleanUp.js"])
subprocess.call(["node", path + "/setUp.js", "Oslo"])
subprocess.call(["node", path + "/insertCities.js"])
subprocess.call(["node", path + "/parseOslo.js"])
