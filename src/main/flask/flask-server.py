from flask import Flask, request
from flask_cors import CORS

import json

import grpc
import helloworld_pb2_grpc
import helloworld_pb2

app = Flask(__name__)
CORS(app)

@app.route("/")
def checkConnections():
    return "Flask Server Home"


@app.route("/helloWorld", methods=["POST", "GET"])
def helloWorld():
    if request.method == 'POST': 
        body = request.json
        with grpc.insecure_channel('localhost:50057') as channel:
            name = body['name']
            stub = helloworld_pb2_grpc.GreeterStub(channel)
            serverResponse = stub.SayHello(helloworld_pb2.HelloRequest(name=name))
        response = serverResponse.message
        print(response)
        return json.dumps(response)
