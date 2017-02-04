'use strict'
const path = require('path')
const webpack = require('webpack')
const webpack_base = require('./webpack.base')
const config = require('../config')

// We add to our JavaScript configuration object a section to configure
// the webpack-dev-server
webpack_base.devServer = {
  port: config.port,
    // Tell the server which port to use
  contentBase: path.resolve(__dirname, config.output_contentBase),
    // Tell the server where to serve content from.
  compress: true,
    // Enable gzip compression for everything served
  hot: true,
    // Enable webpack's Hot Module Replacement feature
  // proxy: {
  //   "/api": {
  //     target: "http://localhost:3000",
  //     pathRewrite: {"^/api" : ""}
  //   }
  // }
    // Proxying some URLs when working with another sever for backend

  /* Advanced output configuration (see: https://webpack.js.org/configuration/dev-server/) */
}


module.exports = webpack_base
