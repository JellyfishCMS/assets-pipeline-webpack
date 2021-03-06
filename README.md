## Assets pipeline with **Webpack**

Webpack is a [node.js](https://nodejs.org/en/) **module bundler** dedicated to _front-end development_. It takes **modules** that you construct around a JavaScript files and generate the static assets that you need to use those modules in your web applications. What you should remember is that now with Webpack you can adopt a **modular approach** when developing and you don't have to worry about anything excepted configuring Webpack.

Hopefully, this repository is a set of stater Webpack configuration. It is also a good way to learn how to create you personal configuration.

The repository contain a tutorial divided in several stage each one of the is stored un a separated branch on github. Start the configuration from the stage you need and learn more advance concepts on each stage.

* [Stage 0: Commented Webpack object](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage0.md)
  * Use Webpack as a JavaScript Bundler
  * Commented Webpack configuration `webpack.conf/webpack.base.js`
  * command line -> `npm run base`
* [Stage 1: Loaders](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage1.md)
  * Use Webpack as a JavaScript, Css, images, and Sass Bundler
  * Commented loaders configuration `webpack.mod/_default-loader.js`
  * command line -> `npm run base`
* [Stage 2: Dev Configuration](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage2.md)
  * Use webpack-dev-server and its HMR (Hot module reload) function
  * Commented Webpack dev configuration `webpack.conf/webpack.dev.js`
  * command line -> `npm run dev`
* [Stage 3: Build Configuration](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage3.md)
  * Publish you assets optimize for production (optimization)
  * Commented Webpack build configuration `webpack.conf/webpack.build.js`
  * command line -> `npm run build`

## Settup

In order to setup the project I advise you to use the package manager [yarn](https://yarnpkg.com/) instead of npm

```shell
yarn
```

Then run the script you need, for example you can the default configuration by typing

```shell
npm run base
```

Here is the list of script you can run:

* `npm run base`  - Publish you JavaScript file(s) taking into account the dependencies
* `npm run dev`   - Run the development server and activate the Hot module replacement (HRM)
* `npm run build` - Publish your assets to be ready in production

## Conventions

* `webpack.conf` folder contains our different configurations
  * We are using a `config.js` file to define some global variable for our Webpack configuration.
  * All configuration use `webpack.base.js` and programmatically modify the **JavaScript Object** he provides.
  * `webpack.default.js` contain a boilerplate to start a new configuration
* `webpack.mod` folder contains our loaders/plugins configurations
  * `default-loader.js` contain a commented boilerplate to start a new configuration

## Create our own configuration

* `webpack.default.js` contain a boilerplate to start a new Webpack configuration
* `default-loader.js` contain a commented boilerplate to start a new loader configuration
