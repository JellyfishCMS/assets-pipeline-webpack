'use strict'
const path = require('path')
const webpack = require('webpack')

// configuration file
const config = require('./config')

// loaders configurations
const cssLoader   = require('../webpack.mod/css-loader')
const imageLoader = require('../webpack.mod/image-loader')
// loaders pre-processor configuration
const babelLoader = require('../webpack.mod/babel-loader')
const sassLoader = require('../webpack.mod/sass-loader')

/**
** WEBPACK configuration object
****************************/
let webpack_base = {
  entry: config.entry, // string | array | object
    // Here the application starts executing and webpack starts bundling

  output: {
    path: config.output_path, // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: config.debug ? '[name].js' : '[name].js', // string
    // the filename template for entry chunks

    publicPath: config.output_publicPath, // strin
    // the url to the output directory resolved relative to the HTML page

    //library: "MyLibrary", // string
    // the name of the exported library

    //libraryTarget: "umd", // enum
    // the type of the exported library

    /* Advanced output configuration (see: https://webpack.js.org/configuration/) */

  },
    // options related how webpack emits results

  module: {
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      babelLoader,
      cssLoader,
      imageLoader,
      sassLoader
    ]
  },
    // modules and loaders

  resolve: {

    //modules: [],
    // directories where to look for modules

    extensions: ['.js', '.css', '.json'],
    // extensions that are used

    alias: {}
    // a list of module name aliases

    /* Advanced resolve configuration (see https://webpack.js.org/configuration/) */

  },
    // options for resolving module requests
    // (does not apply to resolving to loaders)

  performance: {
    hints: config.debug ? false : 'warning'
  },
    // Configure how performance hints are shown.

  devtool: config.debug ? 'cheap-module-eval-source-map' : false,
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.

  //context: path.resolve(__dirname, config.context),
    // the home directory for webpack
    // the entry and module.rules.loader option
    // is resolved relative to this directory

  target: config.target,
    // the environment in which the bundle should run
    // changes chunk loading behavior and available modules

  stats: "normal",
    //lets you precisely control what bundle information gets displayed.

  devServer: {},
    //This set of options is picked up by webpack-dev-server and can be used to change it's behavior in various ways.

  plugins: [],
    // list of additional plugins
}

module.exports = webpack_base
