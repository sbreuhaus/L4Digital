import React from 'react';

var Message = ({forecast, currentTemp, forecastDesc}) => {
  return(
    <div>
      <h1 className="text-center message">It is {currentTemp} degrees and {forecastDesc}</h1>
    </div>
  )
}

module.exports = Message;
