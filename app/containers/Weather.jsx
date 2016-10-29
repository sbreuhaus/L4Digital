import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import ShowData from 'ShowData';
import Chart from 'Chart';
import darkSkyApi from 'darkSkyApi';
import MY_KEYS from 'MY_KEYS'

export default class Weather extends Component {
  constructor(props){
    super(props);
    this.handleMapDisplay = this.handleMapDisplay.bind(this);

    this.state = {
      isLoading: false,
      allWeather: undefined,
      lat: '',
      lng: '',
      mapStyle : {
        width: '100%',
        height: '300px',
        // zIndex: '-4000',
        // position: 'fixed',
        border: "0",
        padding: "0",
      }
    }
  }

  handleMapDisplay(){
    var that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log("user latitude" + position.coords.latitude);
    console.log("user longitude" + position.coords.longitude);
    let userLat = position.coords.latitude;
    let userLong = position.coords.longitude;
    L.mapbox.accessToken = MY_KEYS.MapBoxToken;
    Window.map = L.mapbox.map('map', 'mapbox.streets',{
      zoomControl: true
    }).setView(([userLat, userLong]||[40.7527, -73.9772]), 13);
    let marker = L.marker([userLat, userLong], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#fa0',
        'marker-size': 'large'
      }),
      draggable: true
    }).addTo(Window.map);
    marker.on('dragend', ondragend);
    Window.map.scrollWheelZoom.disable();


    // Set the initial marker coordinate on load.
    ondragend()


    function ondragend() {
      var self = that;
      let m = marker.getLatLng();
      console.log('marker location: ', m.lat, m.lng)
      let lat = m.lat;
      let lng = m.lng;
      that.setState({
        isLoading: true
      })
      darkSkyApi.getWeather(lat, lng)
      .then(function(response){
        console.log("this is the response", response);
        let allWeather = response;
        self.setState({
          isLoading: false,
          currentTemp: allWeather.currently.apparentTemperature,
          forecast: allWeather.daily.data,
          forecastDesc: allWeather.currently.summary
        })
     });
    }
  })
 }

  render(){
    let { currentTemp, isLoading, forecast, forecastDesc } = this.state;
    function renderData(){
      if (isLoading){
        return <h3>Fetching weather...</h3>;
      } else if (currentTemp){
        return(
          <div>
            <Chart forecast={forecast}/>
            <ShowData currentTemp={currentTemp} forecastDesc={forecastDesc}/>
          </div>
        )
      }
    }
    return (
      <div>
        <div id='map' className='map' style={this.state.mapStyle}>
          {this.handleMapDisplay()}
        </div>
        <pre id='coordinates'></pre>
        {renderData()}
      </div>
    )
  }
}
