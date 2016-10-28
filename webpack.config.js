
module.exports = {
  entry: [
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
      MapBox: 'app/containers/MapBox.jsx',
      Message: 'app/components/Message',
      Chart: 'app/components/Chart.jsx',
      MY_KEYS: 'MY_KEYS.js'
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
