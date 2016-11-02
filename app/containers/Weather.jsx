import React, { Component } from 'react';
import Message from 'Message';
import Chart from 'Chart';
import Table from 'Table';
import darkSkyApi from 'darkSkyApi';
import MY_KEYS from 'MY_KEYS'

export default class Weather extends Component {
  constructor(){
    super();
    this.handleDateConvert = this.handleDateConvert.bind(this);
    this.state = {
      isLoading: false,
      allWeather: undefined,
      lat: '',
      lng: '',
      mapStyle : {
        width: '100%',
        height: '300px',
        border: "0",
        padding: "0",
      }
    }
  }

  handleDateConvert(timeStamp) { // converts UNIX to readable day of the week
    let tempDate = new Date();
    tempDate.setTime(timeStamp*1000);
    let date = tempDate.toUTCString();
    date = date.slice(0, 3);
    return date;
  }

  componentDidMount(){ // handles mapbox render
    var that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log("user latitude" + position.coords.latitude);
    console.log("user longitude" + position.coords.longitude);
    let userLat = position.coords.latitude,
       userLong = position.coords.longitude;
    L.mapbox.accessToken = MY_KEYS.MapBoxToken;
    Window.map = L.mapbox.map('map', 'mapbox.high-contrast',{
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

    function ondragend() { // handles darkSkyApi call
      var self = that;
      let m = marker.getLatLng();
      console.log('marker location: ', m.lat, m.lng)
      let lat = m.lat, lng = m.lng;
      that.setState({
        isLoading: true,
        dayNames: undefined
      })
      darkSkyApi.getWeather(lat, lng)
      .then(function(response){
        console.log("this is the response", response);
        let allWeather = response;
        self.setState({
          isLoading: false,
          currentTemp: allWeather.currently.apparentTemperature,
          forecast: allWeather.daily.data,
          forecastDesc: allWeather.currently.summary,
          timeZone: allWeather.timeZone
        })
     });
    }
  })
 }

  render(){
    let { allWeather, currentTemp, isLoading, forecast, forecastDesc } = this.state;
    var that = this;
    function renderData(){
      if (isLoading){
        return <h3 className="page-title message text-center">Fetching weather...</h3>;
      } else if (currentTemp){
        return(
          <div>
            <Chart
              forecast={forecast}
              onConvert={that.handleDateConvert}
              />
            <Message
              currentTemp={currentTemp}
              forecastDesc={forecastDesc}
              />
            <Table
              forecast={forecast}
              onConvert={that.handleDateConvert}/>
          </div>
        )
      }
    }
    return (
      <div>
        <div id='map' className='map' style={this.state.mapStyle}>

        </div>
        <pre id='coordinates'></pre>
        <h3 className="text-center message-pin">Drag the pin to get weather from a location</h3>
        {renderData()}
      </div>
    )
  }
}
