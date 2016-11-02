L4Digital Weather App
=====================
<<<<<<< HEAD

=======
>>>>>>> 904fbdd9c55ad4461d1a14e3532301196df38de8
![l4-logo](https://cloud.githubusercontent.com/assets/3068088/19945435/8800fb2c-a116-11e6-913f-162c2880ed4d.png)

#### Clone

```
<<<<<<< HEAD
> git clone https://github.com/sbreuhaus/L4Digital.git
=======
> git clone https://github.com/sbreuhaus/L4Digital.git 
>>>>>>> 904fbdd9c55ad4461d1a14e3532301196df38de8
> cd L4Digital
> npm install
> npm start
```


This app is built on Node, React(ES6), and Foundation.  It utilizes Mapbox by allowing the user to drop a pin location to retrieve weather data from the DarkSky API. That data is then displayed with the Highcharts API and a table below.

Because the DarkSky API only takes latitude and longitude as search parameters, I needed to use another API to retrieve the coordinates, and Mapbox allowed me to do that.  A map is rendered upon the Weather container mounting, and the draggable pin triggers an AJAX call to DarkSky.  

<<<<<<< HEAD
A core concept of React is one-way data flow, so I created the Weather container to handle the logic.  Data and functions are passed via props to the child components.  Because the Chart and Table (child components) both needed to convert UNIX into a readable format, I created one function that was passed to both children, thus following DRY practices.     
=======
A core concept of React is one-way data flow, so I created the Weather container to handle the logic.  Data and functions are passed via props to the child components.  Because the Chart and Table (child components) both needed to convert UNIX into a readable format, I created one function that was passed to both children, thus following DRY practices.
>>>>>>> 904fbdd9c55ad4461d1a14e3532301196df38de8
