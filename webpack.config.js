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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
 
module.exports = config;

