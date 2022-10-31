from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
import pandas as pd
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="databaseName"
)
mycursor = mydb.cursor()

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

def parseCSV_crime(filePath):
    # CVS Column Names
      col_names = ['X','Y','RowID', 'CrimeCode', 'Location', 'Description', 'Inside_Outside', 'Weapon',
                    'Post', 'Gender', 'Age', 'Race', 'Ethnicity', 'District', 'Neighborhood', 'Latitude',
                    'Longitude', 'GeoLocation', 'Premise', 'VRIName', 'Total_Incidents']
      # Use Pandas to parse the CSV file
      csvData = pd.read_csv(filePath,names=col_names, header=None)
      # Loop through the Rows
      for i,row in csvData.iterrows():
             sql = "INSERT INTO addresses (X, Y, CrimeCode, Location, Description, Inside_Outside, Weapon,\
                    Post, Gender, Age, Race, Ethnicity, District, Neighborhood, Latitude, Longitude, GeoLocation,\
                    Premise, VRIName, Total_Incidents) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
             value = (row['X'],row['Y'],row['CrimeCode'],row['Location'], row['Description'],row['Inside_Outside'],row['Weapon'],row['Post'],
                    row['Gender'],row['Age'],row['Race'],row['Ethnicity'], row['District'],row['Neighborhood'],row['Latitude'],row['Longitude'],
                    row['GeoLocation'],row['Premise'],row['VRIName'],row['Total_Incidents'])
             mycursor.execute(sql, value, if_exists='append')
             mydb.commit()
             print(i,row['X'],row['Y'],row['CrimeCode'],row['Location'], row['Description'],row['Inside_Outside'],row['Weapon'],row['Post'],
                    row['Gender'],row['Age'],row['Race'],row['Ethnicity'], row['District'],row['Neighborhood'],row['Latitude'],row['Longitude'],
                    row['GeoLocation'],row['Premise'],row['VRIName'],row['Total_Incidents'])

if __name__=="__main__":
    main()