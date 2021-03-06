import React from 'react';

const About = () => {
  return(
    <div className="row">
      <div className="medium-6 large-8 small-centered">
        <h1 className='text-center page-title'>About</h1>

        <p>This app is built on Node, React(ES6), and Foundation.  It utilizes Mapbox by allowing the user to drop a pin location to retrieve weather data from the DarkSky API. That data is then displayed with the Highcharts API, and a table below</p>      
          <ul>
            <li>
              <a href='https://github.com/sbreuhaus/L4Digital'>View the souce code on Github!</a>
            </li>
          </ul>
      </div>
    </div>
  )
}

module.exports = About
