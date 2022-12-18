import React, { Component, useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import 'leaflet/dist/leaflet.css';
import {crime_points_2018} from '../CrimeDataImports/crime_points_2018.js';
import {crime_points_2019} from '../CrimeDataImports/crime_points_2019.js';
import {crime_points_2020} from '../CrimeDataImports/crime_points_2020.js';
import {crime_points_2021} from '../CrimeDataImports/crime_points_2021.js';
import {crime_points_2022} from '../CrimeDataImports/crime_points_2022.js';
import './MapView.css';
/*
function DisplayMap() {
  useEffect(() => {
    var map = L.map('map', {
      center: [39.2904, -76.6122],
      zoom: 13,
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
    }).addTo(map);
    var osmUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

    var crime_2018 = L.heatLayer(crime_points_2018, {radius: 12, blur: 15, maxZoom: 19}).addTo(map);
    var crime_2019 = L.heatLayer(crime_points_2019, {radius: 12, blur: 15, maxZoom: 19});
    var crime_2020 = L.heatLayer(crime_points_2020, {radius: 12, blur: 15, maxZoom: 19});
    var crime_2021 = L.heatLayer(crime_points_2021, {radius: 12, blur: 15, maxZoom: 19});
    var crime_2022 = L.heatLayer(crime_points_2022, {radius: 12, blur: 15, maxZoom: 19});

    var output = document.getElementById("date");
    var body = document.getElementById("body");

    var current_layers = [];

    var slider = document.getElementById("range").oninput = function(){
      var value = (this.value-this.min)/(this.max-this.min)*100
      this.style.background = 'linear-gradient(to right, #ff2a5f 0%, #6b8dff, ' + value + '%, #fff ' + value + '%, #fff 100%)'
      output.innerHTML = this.value;

      // Only show crime data from the specified year
      switch (this.value){
        case "2018":
          map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
          });
          current_layers.pop();
          current_layers.push(crime_2018);

          body.style.backgroundPosition = "0% 40%";
          break;
        case "2019":
          map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
          });
          current_layers.pop();
          current_layers.push(crime_2019);

          body.style.backgroundPosition = "0% 50%";
          break;
        case "2020":
          map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
          });
          current_layers.pop();
          current_layers.push(crime_2020);

          body.style.backgroundPosition = "0% 60%";
          break;
        case "2021":
          map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
          });
          current_layers.pop();
          current_layers.push(crime_2021);

          body.style.backgroundPosition = "0% 70%";
          break;
        case "2022":
          map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });
          current_layers.pop();
          current_layers.push(crime_2022);

          body.style.backgroundPosition = "0% 80%";
          break;
      }

      // Add all filtered layers to map
      var layers = L.layerGroup(current_layers);
      layers.addTo(map);
    }

    var agg_assault = L.heatLayer(agg_assault, {radius: 12, blur: 15, maxZoom: 19});
    var arson = L.heatLayer(arson, {radius: 12, blur: 15, maxZoom: 19});
    var auto_theft = L.heatLayer(auto_theft, {radius: 12, blur: 15, maxZoom: 19});
    var burglary = L.heatLayer(burglary, {radius: 12, blur: 15, maxZoom: 19});
    var common_assault = L.heatLayer(common_assault, {radius: 12, blur: 15, maxZoom: 19});
    var homicide = L.heatLayer(homicide, {radius: 12, blur: 15, maxZoom: 19});
    var larceny = L.heatLayer(larceny, {radius: 12, blur: 15, maxZoom: 19});
    var larceny_from_auto = L.heatLayer(larceny_from_auto, {radius: 12, blur: 15, maxZoom: 19});
    var rape = L.heatLayer(rape, {radius: 12, blur: 15, maxZoom: 19});
    var robbery = L.heatLayer(robbery, {radius: 12, blur: 15, maxZoom: 19});
    var robbery_carjacking = L.heatLayer(robbery_carjacking, {radius: 12, blur: 15, maxZoom: 19});
    var robbery_commercial = L.heatLayer(robbery_commercial, {radius: 12, blur: 15, maxZoom: 19});
    var shooting = L.heatLayer(shooting, {radius: 12, blur: 15, maxZoom: 19});

    var crime_type = document.getElementById("crime_type").oninput = function(){
        switch (this.value) {
          case "agg_assault":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            agg_assault.addTo(map);
            break;
          case "arson":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            arson.addTo(map);
            break;
          case "auto_theft":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            auto_theft.addTo(map);
            break;
          case "burglary":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            burglary.addTo(map);
            break;
          case "common_assault":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            common_assault.addTo(map);
            break;
          case "homicide":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            homicide.addTo(map);
            break;
          case "larceny":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            larceny.addTo(map);
            break;
          case "larceny_from_auto":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            larceny_from_auto.addTo(map);
            break;
          case "rape":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            rape.addTo(map);
            break;
          case "robbery":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            robbery.addTo(map);
            break;
          case "robbery_carjacking":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            robbery_carjacking.addTo(map);
            break;
          case "robbery_commercial":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            robbery_commercial.addTo(map);
            break;
          case "shooting":
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });

            shooting.addTo(map);
            break;
          default:
            map.eachLayer(function (layer) {
              if (osmUrl !== layer._url){map.removeLayer(layer)};
            });
        }
    }
  }, []);
}
*/

// Global vars for filtering
// Initialized to some default values
// NULL values return all tuples for a given column
var year = 2018;
var crime_type = 'NULL';
var gender = 'NULL';
var district = 'NULL';

function Slider() {
  const [value, onChange] = useState("2018");
  var body = document.getElementById("body");
  
  useEffect(()=>{
    var slider = document.getElementById("range").oninput = function(){
      var value = (this.value-this.min)/(this.max-this.min)*100
      this.style.background = 'linear-gradient(to right, #ff2a5f 0%, #6b8dff, ' + value + '%, #fff ' + value + '%, #fff 100%)'
      value = this.value;
      year = this.value;
    }
  })

  function onClick(e) {
    var jsonData = {"CrimeDateTime": "2018", "Description" : "ROBBERY", "Gender": "M", "District": "NORTHERN"}
    e.preventDefault();
    console.log(jsonData);

    let setResp = this;
    // Send data to the backend via POST
    fetch('http://localhost:5000/getfilter/endpoint', {  // Enter your IP address here

      method: 'PUT', 
      mode: 'cors', 
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    }).then(response => response.json()) 
    .catch(error => console.log(error))

    
  }

  return(
    <div>
    <div id="map">
            <Map center={{lat: 39.2904, lng: -76.6122}} zoom={13} style={{
        height: 600 + "px",
        width: 1000 + "px",
      }}>
        
                <TileLayer
                  maxZoom='20'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors &copy; <a href=&quot;https://carto.com/attributions&quot;>CARTO</a>"
                  subdomains= 'abcd'
                />
                
                {value === "2018" &&
                  <HeatmapLayer
                  points={crime_points_2018}
                  longitudeExtractor={(m) => m[1]}
                  latitudeExtractor={(m) => m[0]}
                  intensityExtractor={(m) => .5}
                  radius={15}
                  blur={9}
                />
                }
                {value === "2019" &&
                  <HeatmapLayer
                  points={crime_points_2019}
                  longitudeExtractor={(m) => m[1]}
                  latitudeExtractor={(m) => m[0]}
                  intensityExtractor={(m) => .5}
                  radius={15}
                  blur={9}
                />
                }
                {value === "2020" &&
                  <HeatmapLayer
                  points={crime_points_2020}
                  longitudeExtractor={(m) => m[1]}
                  latitudeExtractor={(m) => m[0]}
                  intensityExtractor={(m) => .5}
                  radius={15}
                  blur={9}
                />
                }
                {value === "2021" &&
                  <HeatmapLayer
                  points={crime_points_2021}
                  longitudeExtractor={(m) => m[1]}
                  latitudeExtractor={(m) => m[0]}
                  intensityExtractor={(m) => .5}
                  radius={15}
                  blur={9}
                />
                }
                {value === "2022" &&
                  <HeatmapLayer
                  points={crime_points_2022}
                  longitudeExtractor={(m) => m[1]}
                  latitudeExtractor={(m) => m[0]}
                  intensityExtractor={(m) => .5}
                  radius={15}
                  blur={9}
                />
                }
            </Map>
            </div>
    <div className="dateslider">
      <div className="defaultValue-container">
        <span className="text">Year:</span>
        <span id="date">{value}</span>
      </div>
      <input type="range" min="2018" max="2022" className="slider" value={value} onChange={({ target: { value: radius } }) => {onChange(radius);}} step="1" id="range"></input>
    </div>
    <form onSubmit={onClick}>
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function CrimeTypeDropdown() {
  const [value, onChange] = useState();
  crime_type = value;

  return(<div className="crime_type_dropdown">
            <span className="text">Crime Type:</span>
            <select name="crime_type" id="crime_type" defaultValue="Arson" onChange={({ target: { value: radius } }) => {onChange(radius);}}>
              <option defaultValue="all">All Crimes</option>
              <option defaultValue="agg_assault">Aggravated Assault</option>
              <option defaultValue="arson">Arson</option>
              <option defaultValue="auto_theft">Auto Theft</option>
              <option defaultValue="burglary">Burglary</option>
              <option defaultValue="common_assault">Common Assault</option>
              <option defaultValue="homicide">Homicide</option>
              <option defaultValue="larceny">Larceny</option>
              <option defaultValue="larceny_from_auto">Larceny From Auto</option>
              <option defaultValue="rape">Rape</option>
              <option defaultValue="robbery">Robbery</option>
              <option defaultValue="robbery_carjacking">Robbery - Carjacking</option>
              <option defaultValue="robbery_commercial">Robbery - Commercial</option>
              <option defaultValue="shooting">Shooting</option>
            </select>
          </div>
  )
}

function GenderDropdown(){
  const [value, onChange] = useState();
  gender = value;

  return(
    <div className="gender_dropdown">
    <span className="text">Sex:</span>
    <select name="gender" id="gender" defaultValue="Arson" onChange={({ target: { value: radius } }) => {onChange(radius);}}>
    <option defaultValue="all">All</option>
      <option defaultValue="male">Male</option>
      <option defaultValue="female">Female</option>
      <option defaultValue="unspecified">Unspecified</option>
    </select>
    </div>
  )
}

function DistrictDropdown(){
  const [value, onChange] = useState();
  district = value;

  return(
    <div className="district_dropdown">
    <span className="text">District:</span>
    <select name="district" id="district" defaultValue="Arson" onChange={({ target: { value: radius } }) => {onChange(radius);}}>
      <option defaultValue="All">All</option>
      <option defaultValue="Northwest">Northwest</option>
      <option defaultValue="Northern">Northern</option>
      <option defaultValue="Northeast">Northeast</option>
      <option defaultValue="Western">Western</option>
      <option defaultValue="Central">Central</option>
      <option defaultValue="Eastern">Eastern</option>
      <option defaultValue="Southwest">Southwest</option>
      <option defaultValue="Southern">Southern</option>
      <option defaultValue="Southeast">Southeast</option>
      <option defaultValue="unspecified">Unspecified</option>
    </select>
    </div>
  )
}

class MapView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 39.2904, lng: -76.6122 },
      zoom: 13,
      height: 1000
    }
  }
  
  render() {
    return (
      <body style={{backgroundSize: "200% 200%",
      backgroundPosition: "0% 40%",
      transition: "ease-out background-position 300ms",
      backdropFilter: "blur(1.5rem)"}}>
      <div>
        <div id="header">
          <span className="text">Baltimore COVID-19 and Crime Data Visualizer</span>
        </div>

        <div id="about">
          <span className="text">About</span>
        </div>

        <div id="map_wrapper">
            <Slider></Slider>
            <div></div>
          <div id="filters">
            <span className="text">Data Filters</span>
          </div>
          <CrimeTypeDropdown></CrimeTypeDropdown>
          <GenderDropdown></GenderDropdown>
          <DistrictDropdown></DistrictDropdown>
        </div>
        </div>
        </body>
    );
  }
}

export default MapView;