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


def parseCSV(filePath):
      # CVS Column Names
      col_names = ['first_name','last_name','address', 'street', 'state' , 'zip']
      # Use Pandas to parse the CSV file
      csvData = pd.read_csv(filePath,names=col_names, header=None)
      # Loop through the Rows
      for i,row in csvData.iterrows():
             sql = "INSERT INTO addresses (first_name, last_name, address, street, state, zip) VALUES (%s, %s, %s, %s, %s, %s)"
             value = (row['first_name'],row['last_name'],row['address'],row['street'],row['state'],str(row['zip']))
             mycursor.execute(sql, value, if_exists='append')
             mydb.commit()
             print(i,row['first_name'],row['last_name'],row['address'],row['street'],row['state'],row['zip'])

if __name__=="__main__":
    main()