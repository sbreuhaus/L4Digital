import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';

export default class Weather extends Component {
  render(){
    return (
      <div>
        <h1>Weather Container</h1>
        <WeatherForm />
      </div>
    )
  }
}
