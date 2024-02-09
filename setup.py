import os
import subprocess

# Changing to ./frontend
os.chdir('./frontend')

# Installing dependencies
subprocess.call(["npm", "i"])

# Changing to ./backend
os.chdir('../backend')

# Installing dependencies
subprocess.call(["npm", "i"])

# Generating prisma client
subprocess.call(["npm", "run", "db:generate"])
