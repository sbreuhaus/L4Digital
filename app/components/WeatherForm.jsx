import React, { Component } from 'react';
import darkSkyApi from 'darkSkyApi';


export default class WeatherForm extends Component {
  constructor(props){
    super(props)

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(){
    console.log("form submitted");
    this.props.onSearch();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='location' placeholder='search weather by city'/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
}
