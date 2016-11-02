import React from 'react';

const About = () => {
  return(
    <div className="row">
      <div className="medium-6 large-8 small-centered">
        <h1 className='text-center page-title'>About</h1>
        <p>This is simple app built on Node, React, and Foundation.  It utilizes Mapbox by allowing the user to drop a pin location which then uses the darkSky API to retrieve data. The 7 day tempeature highs, as well as the forecast data in a table below.</p>
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
