import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


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