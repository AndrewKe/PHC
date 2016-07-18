// webpack.config.js
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './entry.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: 'http://localhost:8080/build/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ }
    ]
  }
};
