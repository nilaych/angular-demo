var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = "./";
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  
  devServer: {
	  inline: true,
	  port: 7777
  },
  
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
		exclude: /node_modules/,
        loader : 'babel',
		
		query: {
			presets: ['es2015', 'react']
		}
      }
    ]
  }
};

module.exports = config;