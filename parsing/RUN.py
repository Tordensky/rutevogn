import subprocess
import os

subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js"])
subprocess.call(["node", "parsing/parseXML.js", "2013-11-21", "2013-11-23"])