import subprocess
import os

subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/cleanUp.js"])
subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/setUp.js"])
subprocess.call(["node", "/home/rutevogn/rutevogn/parsing/parseXML.js", "2014-1-15", "2014-1-30"])

