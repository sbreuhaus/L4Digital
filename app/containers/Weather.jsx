import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import Message from 'Message';
import Chart from 'Chart';
import darkSkyApi from 'darkSkyApi';

export default class Weather extends Component {
  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      isLoading: false
    }
  }

  handleSearch(){
    let that = this;
    this.setState({
      isLoading: true
    })
    darkSkyApi.getWeather().then(function(response){
      let allWeather = response;
      console.log("allWeather", allWeather);
      that.setState({
        isLoading: false,
        currentTemp: allWeather.currently.apparentTemperature,
        forecast: allWeather.daily.data
      })
    })

  }

  render(){
    let { currentTemp, isLoading, forecast } = this.state;
    function renderData(){
      if (isLoading){
        return <h3>Fetching weather...</h3>;
      } else if (currentTemp){
        return(
          <div>
            <Chart forecast={forecast}/>
            <Message currentTemp={currentTemp}/>
          </div>
        )
      }
    }
    return (
      <div>
        <h1>Weather Container</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderData()}
      </div>
    )
  }
}
