import React, { Component, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet.heat";
import L from 'leaflet';
import crime_points_2018 from '../CrimeDataImports/crime_points_2018';
import crime_points_2019 from '../CrimeDataImports/crime_points_2019';
import crime_points_2020 from '../CrimeDataImports/crime_points_2020';
import crime_points_2021 from '../CrimeDataImports/crime_points_2021';
import crime_points_2022 from '../CrimeDataImports/crime_points_2022';

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
              if (osmUrl != layer._url){map.removeLayer(layer)};
          });
          current_layers.pop();
          current_layers.push(crime_2018);

          body.style.backgroundPosition = "0% 40%";
          break;
        case "2019":
          map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
          });
          current_layers.pop();
          current_layers.push(crime_2019);

          body.style.backgroundPosition = "0% 50%";
          break;
        case "2020":
          map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
          });
          current_layers.pop();
          current_layers.push(crime_2020);

          body.style.backgroundPosition = "0% 60%";
          break;
        case "2021":
          map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
          });
          current_layers.pop();
          current_layers.push(crime_2021);

          body.style.backgroundPosition = "0% 70%";
          break;
        case "2022":
          map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
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
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            agg_assault.addTo(map);
            break;
          case "arson":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            arson.addTo(map);
            break;
          case "auto_theft":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            auto_theft.addTo(map);
            break;
          case "burglary":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            burglary.addTo(map);
            break;
          case "common_assault":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            common_assault.addTo(map);
            break;
          case "homicide":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            homicide.addTo(map);
            break;
          case "larceny":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            larceny.addTo(map);
            break;
          case "larceny_from_auto":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            larceny_from_auto.addTo(map);
            break;
          case "rape":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            rape.addTo(map);
            break;
          case "robbery":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            robbery.addTo(map);
            break;
          case "robbery_carjacking":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            robbery_carjacking.addTo(map);
            break;
          case "robbery_commercial":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            robbery_commercial.addTo(map);
            break;
          case "shooting":
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });

            shooting.addTo(map);
            break;
          default:
            map.eachLayer(function (layer) {
              if (osmUrl != layer._url){map.removeLayer(layer)};
            });
        }
    }
  }, []);
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
      <div>
        <div id="header">
          <span className="text">Baltimore COVID-19 and Crime Data Visualizer</span>
        </div>

        <div id="about">
          <span className="text">About</span>
        </div>

        <div id="map_wrapper">
        <div id="map">
            <MapContainer center={{lat: 39.2904, lng: -76.6122}} zoom={13} style={{
        height: 600 + "px",
        width: 1000 + "px",
      }}>
                <TileLayer
                  maxZoom='20'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors &copy; <a href=&quot;https://carto.com/attributions&quot;>CARTO</a>"
                  subdomains= 'abcd'
                />
              </MapContainer>
            </div>
          <div id="filters">
            <span className="text">Data Filters</span>
          </div>
          <div className="dateslider">
            <div className="defaultValue-container">
              <span className="text">Year:</span>
              <span id="date">2018</span>
            </div>
            <input type="range" min="2018" max="2022" defaultValue="2018" className="slider" id="range"></input>
          </div>
          <div className="crime_type_dropdown">
            <span className="text">Crime Type:</span>
            <select name="crime_type" id="crime_type" multiple>
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
        </div>
        </div>
    );
  }
}

export default MapView;