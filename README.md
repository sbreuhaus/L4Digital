L4Digital Weather app
=====================
![l4-logo](https://cloud.githubusercontent.com/assets/3068088/19945435/8800fb2c-a116-11e6-913f-162c2880ed4d.png)

#### Clone

```
> git clone https://github.com/sbreuhaus/L4Digital.git
> cd L4Digital
> npm install
> npm start
```
###### Note: A key and token is needed for the DarkSky and Mapbox API's. These are free, but must be accessible in darkSkyApi.js and Weather.jsx

This app is built on Node, React(ES6), and Foundation.  It utilizes Mapbox by allowing the user to drop a pin location to retrieve weather data from the DarkSky API. That data is then displayed with the Highcharts API and a table below.

Because the DarkSky API only takes latitude and longitude as search parameters, I needed to use another API to retrieve the coordinates, and Mapbox allowed me to do that.  A map is rendered upon the Weather container mounting, and the draggable pin triggers an AJAX call to DarkSky.  

A core concept of React is one-way data flow, so I created the Weather container to handle the logic.  Data and functions are passed via props to the child components.  Because the Chart and Table (child components) both needed to convert UNIX into a readable format, I created one function that was passed to both children, thus following DRY practices.
