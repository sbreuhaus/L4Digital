import React from 'react';
import ReactHighcharts from 'react-highcharts';


var Chart = React.createClass({
  getInitialState: function(){
    return {
      title: {text: "Highs for this week!"},
      yAxis: {title:{text:'temp'}},
      series: [{
        name: 'City',
        data: [null],
        lineWidth: 10,

     }]
   }
  },

  handleUpdateChart: function(){
    let chart     = this.refs.chart.getChart(),
        forecast  = this.props.forecast,
        convert   = this.props.onConvert,
        dayOfWeek = [],
        tempMax;
    chart.series[0].data.splice(0, 1); // loops through forecast array and pushed temps into data config
    for (var i = 0; i < forecast.length; i++) {
      let timeStamp = forecast[i].time,
               date = convert(timeStamp);
      dayOfWeek.push(date);
      tempMax = forecast[i].apparentTemperatureMax;
      chart.series[0].data.push(tempMax);
    };
    this.setState({
      series: [{
        data: chart.series[0].data,
        lineWidth: 10,
     }],
      xAxis: {categories: dayOfWeek }
    })
  },

  componentDidMount: function() {
    return this.handleUpdateChart();
  },

  render: function() {
    return (
      <div className="row page-title">
        <ReactHighcharts config={this.state} ref="chart"></ReactHighcharts>
      </div>
    )
  } // end of render
});

module.exports = Chart;
