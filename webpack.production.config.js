// webpack.production.config.js
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: ['./entry.js'],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: 'build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },

  devServer: { historyApiFallback: true }
};
