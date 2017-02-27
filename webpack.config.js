var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.resolve('app/app.jsx'),

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '*'],
    alias: {
    MaterialUI: path.resolve(__dirname, 'node_modules/material-ui')
    }
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.scss$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.css$/, exclude: /nodes_modules/, use: ['style-loader', 'css-loader'] },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?name=fonts/[name].[ext]'}
    ]
  }
}
