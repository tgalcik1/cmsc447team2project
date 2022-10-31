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


def parseCSV_covidcases(filePath):
      # CVS Column Names
      col_names = ['OBJECTID','DATE','Baltimore', 'Baltimore_CITY']
      # Use Pandas to parse the CSV file
      csvData = pd.read_csv(filePath,names=col_names, header=None)
      # Loop through the Rows
      for i,row in csvData.iterrows():
             sql = "INSERT INTO addresses (OBJECTID, DATE, Baltimore, Baltimore_CITY) VALUES (%s, %s, %s, %s)"
             value = (row['OBJECTID'],row['DATE'],row['Baltimore'],row['Baltimore_CITY'])
             mycursor.execute(sql, value, if_exists='append')
             mydb.commit()
             print(i,row['OBJECTID'],row['DATE'],row['Baltimore'],row['Baltimore_CITY'])


if __name__=="__main__":
    main()