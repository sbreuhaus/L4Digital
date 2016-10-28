import React, { Component } from 'react';

export default class WeatherForm extends Component {
  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='location' placeholder='search weather by city'/>
          <button className='button expanded hollow'>Get Weather</button>
        </form>
      </div>
    )
  }
}
