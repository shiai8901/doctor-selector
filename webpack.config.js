var webpack = require('webpack');

module.exports = {
  entry: [__dirname + '/src/index.js'],
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: __dirname + '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        include: __dirname + '/dist/',
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};