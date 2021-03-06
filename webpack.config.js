var webpack = require('webpack');

module.exports = {
  entry: [
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/containers/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      darkSkyApi: 'app/api/darkSkyApi.js',
      MapBox: 'app/components/MapBox.jsx',
      Message: 'app/components/Message.jsx',
      About: 'app/components/About.jsx',
      Table: 'app/components/Table.jsx',
      Chart: 'app/components/Chart.jsx',
      MY_KEYS: 'MY_KEYS.js',
      applicationStyles: 'app/styles/app.css'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
