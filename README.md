# gRPC-Flask-Server
Boiler plate setup

# running gRPC server
- `./run-target.sh hello-world-server`

# virtual env & running flask server
- This is gitignored because it's too big, so you'll need to create a virtual environment locally.
- In the top level of the project structure,
  - `python -m venv venv`
  - `source venv/bin/activate`
  - `pip install -r requirements.txt`
- You can then `cd src/main/flask` & run `export FLASK_APP=flask_server.py`, then `flask run`

# Running client
- `cd cra_client`
- `npm i`
- `npm start`
