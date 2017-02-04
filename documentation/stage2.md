# Webpack configuration stage 2

In this section we will create our "dev" configuration. This one wil use webpack-dev-server to serve our html files and dynamically update our web browser anytime me change our files.

## webpack-dev-server

1. For our "dev" configuration we will create a new configuration file called `webpack.conf/webpack.dev.js`.

2. Then in this file we will require our previous configuration called `./webpack.base`

  ```javascript
  'use strict'
  const path = require('path')
  const webpack = require('webpack')
  /*->*/ const webpack_base = require('./webpack.base') // Our base configuration
  const config = require('../config')
  ```

3. Then we will define on our base configuration an object called devServer. This object containing the configuration for the devServer. One again, you see how the webpack configuration works, you just fill a form.

  ```javascript
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
  ```

4. Finally, we export our modified configuration object

  ```javascript
  module.exports = webpack_base
  ```

5. Now, go to your package.json and define a new script:

  ```
  "scripts": {
    "dev": "NODE_ENV=development webpack-dev-server --config webpack.conf/webpack.dev.js"
  },
  ```

  Notice that this time we are using webpack-dev-server instead of webpack but is pretty much the same.

6. You can run you dev configuration with the command line `npm run dev`

## Development plugins and loaders
