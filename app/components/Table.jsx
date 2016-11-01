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
      <div>
        <table className="hover">
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
