import subprocess
import os

subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js"])



subprocess.call(["node", "parsing/parseXML.js", "2013-12-01", "2013-12-24"])

