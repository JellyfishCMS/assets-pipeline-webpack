# Assets pipeline with **Webpack**

Webpack is a [node.js](https://nodejs.org/en/) **module bundler** dedicated to _front-end development_. You create **modules** with **all kind of files** and languages and Webpack generate the **static files** (also called *assets*) ready for your web browser.

![](https://webpack.github.io/assets/what-is-webpack.png)

 What you should remember is that with Webpack you can adopt a **modular approach** when developing and you don't have to worry about anything excepted configuring Webpack.

Fortunately, this repository is a set of stater Webpack configuration. And also a progressive way to learn how to create you personal configuration.

The repository contains a tutorial divided in several stage. As you go from stage to stage, are more complex configuration is available, which means more feature to help you in you development. Each stage is stored on a separated branch on github, so just checkout to the next stage to progress in the tutorial or to jump directly to the configuration and the features you need.

* [Stage 0: Basic Webpack Configuration](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage0.md)
* [Stage 1: Introduction to Loaders](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage1.md)

## Settup

Open `config.js` and define the global configuration according to you project

```shell
npm i
```

## features & Command lines

This configuration can:
  * Bundle JavaScript files
  * Automatically install and save your missing dependencies

Here is the list of script you can run:

| CLI | Implemented at | Description |
|--|--|--|
|`npm run base`  | [Stage 0] | Publish you JavaScript file(s) taking into account the dependencies|
|`npm run build` | [Stage 1] | Publish your assets to be ready in production|
|`npm run dev`   | [Stage 2] | Run the development server and activate the Hot module replacement (HRM)|

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
