var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
