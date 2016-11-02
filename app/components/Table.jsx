import React, { Component } from 'react';

export default class Table extends Component{

  render(){
    let convert = this.props.onConvert;
    let forecast = this.props.forecast.map((day, index) => {
      let timeStamp = day.time,
               date = convert(timeStamp),
            summary = day.summary,
             tempHi = day.temperatureMax,
             tempLo = day.temperatureMin;
      return <tr key={index}>
              <td>{date}</td>
              <td>{summary}</td>
              <td>{tempHi}</td>
              <td>{tempLo}</td>
            </tr>
    });
    return(
      <div className="row">
        <table className="hover medium-6 large-8 small-centered">
          <thead>
            <tr>
              <th>Day</th>
              <th>Summary</th>
              <th>High</th>
              <th>Lo</th>
            </tr>
          </thead>
          <tbody>
            {forecast}
          </tbody>
        </table>
      </div>
    )
  }
}
