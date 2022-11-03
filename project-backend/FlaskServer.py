from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
import pandas as pd
import mysql.connector
import os
from os.path import join, dirname, realpath

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="cmsc447project"
)
mycursor = mydb.cursor()

app = Flask(__name__)
cors = CORS(app)

UPLOAD_FOLDER = 'static/files'
app.config['UPLOAD_FOLDER'] =  UPLOAD_FOLDER

mysql = MySQL(app)

@app.route('/', methods =["GET", "POST"])
def defaultpage():
    return render_template('index.html')

@app.route("/", methods=['POST'])
def uploadFiles():
    # get the uploaded file
    uploaded_file = request.files['file']
    if uploaded_file.filename != '':
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], uploaded_file.filename)
        # set the file path
        uploaded_file.save(file_path)
        # save the file
    return redirect(url_for('index'))

def parseCSV_covidcases(filePath):
    mycursor.execute("CREATE TABLE COVIDcases (OBJECTID VARCHAR(255), DATE VARCHAR(255), Baltimore VARCHAR(255), Baltimore_CITY VARCHAR(255))")
    # CVS Column Names
    col_names = ['OBJECTID','DATE', 'Allegany', 'Anne_Arundel', 'Baltimore', 'Baltimore_CITY', 'Calvert', 'Caroline',
                 'Carroll', 'Cecil', 'Charles', 'Dorcheste', 'Fredick', 'Garret', 'Harford','Howard', 'Kent', 'Montgomery',
                 'Prince_Georges', 'Queen_Annes', 'Somerset', 'St_Marys', 'talbot', 'Washington', 'Wicomico', 'Worcester', 'Unknown']
    # Use Pandas to parse the CSV file
    col_needed = ['OBJECTID', 'DATE', 'Baltimore', 'Baltimore_CITY']
    csvData = pd.read_csv(filePath,names=col_names, header=None)
    csvData = csvData.where((pd.notnull(csvData)), None)
    csvDataParse = csvData.iloc[1:, [0,1,4,5]]
    
    # Loop through the Rows
    for i,row in csvDataParse.iterrows():
        sql = "INSERT INTO COVIDcases (OBJECTID, DATE, Baltimore, Baltimore_CITY) VALUES (%s, %s, %s, %s)"
        value = (row['OBJECTID'],row['DATE'],row['Baltimore'],row['Baltimore_CITY'])
        mycursor.execute(sql, value)
        mydb.commit()

def parseCSV_crime(filePath):
    mycursor.execute("CREATE TABLE crimedata (X VARCHAR(255), Y VARCHAR(255), RowID VARCHAR(255), CrimeCode VARCHAR(255), Location VARCHAR(255), \
                    Description VARCHAR(255), Inside_Outside VARCHAR(255), Weapon VARCHAR(255), Post VARCHAR(255), Gender VARCHAR(255), Age VARCHAR(255), \
                    Race VARCHAR(255), Ethnicity VARCHAR(255), District VARCHAR(255), Neighborhood VARCHAR(255), Latitude VARCHAR(255), Longitude VARCHAR(255), \
                    GeoLocation VARCHAR(255), Premise VARCHAR(255), VRIName VARCHAR(255), Total_Incidents VARCHAR(255))")
    # CVS Column Names
    col_names = ['X','Y', 'RowID', 'CrimeCode', 'Location', 'Description', 'Inside_Outside', 'Weapon',
                'Post', 'Gender', 'Age', 'Race', 'Ethnicity', 'District', 'Neighborhood', 'Latitude',
                'Longitude', 'GeoLocation', 'Premise', 'VRIName', 'Total_Incidents']
    # Use Pandas to parse the CSV file
    csvData = pd.read_csv(filePath,names=col_names, header=None)
    csvData = csvData.where((pd.notnull(csvData)), None)
    print(csvData)
    # Loop through the Rows
    for i,row in csvData.iterrows():
            sql = "INSERT INTO crimedata (X, Y, RowID, CrimeCode, Location, Description, Inside_Outside, Weapon,\
                    Post, Gender, Age, Race, Ethnicity, District, Neighborhood, Latitude, Longitude, GeoLocation,\
                    Premise, VRIName, Total_Incidents) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            value = (row['X'],row['Y'],row['RowID'],row['CrimeCode'],row['Location'], row['Description'],row['Inside_Outside'],row['Weapon'],row['Post'],
                    row['Gender'],row['Age'],row['Race'],row['Ethnicity'], row['District'],row['Neighborhood'],row['Latitude'],row['Longitude'],
                    row['GeoLocation'],row['Premise'],row['VRIName'],row['Total_Incidents'])
            mycursor.execute(sql, value)
            mydb.commit()


def main():
<<<<<<< HEAD
   # parseCSV_crime(r"C:\Users\rober\Downloads\Part_1_Crime_Data_.csv")
    parseCSV_covidcases(r"C:\Users\lukec\Desktop\MDCOVID19_CasesByCounty.csv")
=======
   #parseCSV_crime(r"C:\Users\rober\Downloads\Part_1_Crime_Data_.csv")
    parseCSV_covidcases(r"C:\Users\rober\Downloads\MDCOVID19_CasesByCounty.csv")
>>>>>>> e3c7aa94919e1a9c02106f78f076ad03656e235d
    app.run(host='localhost', port=5000)

if __name__=="__main__":
    main()