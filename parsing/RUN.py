import subprocess
import os

subprocess.call(["node", "parsing/cleanUp.js"])
subprocess.call(["node", "parsing/setUp.js"])
subprocess.call(["node", "parsing/parseXML.js", "2014-01-05", "2014-01-31"])
