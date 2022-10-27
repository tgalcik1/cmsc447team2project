from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL

app = Flask(__name__)
cors = CORS(app)

mysql = MySQL(app)

@app.route('/', methods =["GET", "POST"])
def defaultpage():
    return("Default landing page")


def main():

    app.run(host='localhost', port=5000)



if __name__=="__main__":
    main()