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
    extensions: ['.js', '.jsx', '.scss', '*']
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
 
module.exports = config;

