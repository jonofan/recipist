var webpack = require("webpack");
var path = require("path");
 
const config = {
  entry: path.resolve(__dirname, 'app/index.jsx') ,
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js',
    publicPath: "static/"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '*'],
    alias: {
      MaterialUI: path.resolve(__dirname, 'node_modules/material-ui')
    }
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: 'babel-loader'  
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
 
module.exports = config;

