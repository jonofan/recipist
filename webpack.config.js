var webpack = require("webpack");
var path = require("path");
 
const config = {
  entry: path.resolve(__dirname, 'app/index.js') ,
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js',
    publicPath: "static/"
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  devServer: {
    compress: false,
    publicPath: "http://localhost:8080/static/",
    filename: "bundle.js",
    hot: true,
    inline: true
  }
};
 
module.exports = config;

