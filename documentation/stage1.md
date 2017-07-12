# WEBPACK CONFIGURATION STAGE 0

By defaut Webpack only manage javascript files, however a module systems called loaders let you go further by including other type of files in your modules (html, css, less, sass, jade, etc.)

## Road Map

At this stage you will learn:

* [ ] How to add and configure several loaders

Your configuration will contains:
    * [ ] A improved version of `webpack.base.js`
    * [ ] A `webpack.mod` containing loader configuration
      * [ ] A `_default-loader.js` file, a boilerplate for loaders configuartions
      * [ ] A `_babel-loader.js` file, loader configuration for ES6
      * [ ] A `_css-loader.js` file, loader configuration for CSS      
      * [ ] A `_image-loader.js` file, loader configuration for imagess
      * [ ] A `_sass-loader.js` file, loader configuration for SASS/SCSS

Your configuration will be able to:
  * [ ] Bundle JavaScript, Css, images, and Sass files
  * [ ] Automatically install and save your missing dependencies

## Loaders

Webpack posses a systems called `loaders` that allow you to load other type of files than JavaScript.

* First, find the loader you need either on [this page](https://github.com/webpack/webpack) or on [npm](https://www.npmjs.com/)

* Then, explain to Webpack How to use this loader and you will discover how to do it in this section.

In the **module section** of your Webpack configuration (see _webpack.base.js_), you must provide a JavaScript Object that define this loader.


In this repository all the module/loaders configuration are stored in the `webpack.mod` folder. It helps us to keep our main configuration file short and human readable.

Thus, in order to use a loader configuration:

* First we import it in our configuration

```JavaScript
// loaders configurations
const babelLoader = require('../webpack.mod/babel-loader')
```

* Then add your loader configuration to the **rules** array

```JavaScript
module: {
  rules: [
    // rules for modules (configure loaders, parser options, etc.)
    babelLoader // a JavaScript Object defining How to use the babel loader.
  ]
},
  // modules and loaders
```

## Configuring a loaders

Configuring your loaders is the same idea than configuring Webpack, we must provide a Javascript Object. It is a bit like filling a form.  In that sens you can find a commented standard loader configuration in `webpack.mod/default-loader.js`.

```JavaScript
module.exports = {
  test: '',
    // The Condition must match, so the loaders is used for the given file
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  //include: [],
    // The Condition must match, to include the files.
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  exclude: [/node_modules/, /libs/, /bower_components/],
    // The Condition must NOT match. Those files are excluded
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  //issuer: { test, include, exclude },
    // conditions for the issuer (the origin of the import)

  enforce: "pre", // possible values: "pre" | "post"
    // flags to apply these rules

  loader: "",
    // the loader which should be applied, it'll be resolved relative to the context

  options: { },
    // options for the loader

  //use: [],
    // apply multiple loaders and options
}
```

## What is the next Step?

In this stage I have implemented several loaders:

* babel: write JavaScript from the future and don't worry about compatibility
* css: two loader that let you bundle your css
* image: bundle your images

You must have notice that Webpack is putting everything that we define in our module in the same file. **This is absolutely not what we want in production.**

However it is very practical when it comes to the development phase, because we can use a technology called Hot Module Replacement (HMR). Webpack will provide us a web server that will dynamically replace what have change in our application when we save our files. This is very fast an et you se you application evolve in real tie without reloading you browser.

As a result we will **define two configurations**:

* **A development configuration** with webpack-dev-server
* **A Production configuration** that will publish and optimize our assets

## Conclusion

1. **Check our Road Map**

2. Learn more about the Plugins and loaders we installed

| Plugin | Description |
|--|--|
| [babel-loader](https://github.com/babel/babel-loader) | Use the newest version of JavaScript and be sure the generated code will be compatible with all webbrowsers |
| [css-loader](https://github.com/webpack-contrib/css-loader) | Include CSS in your module |
| [images-loader](https://github.com/thetalecrafter/img-loader) | Image minimizing loader for webpack 2 |
| [sass-loader](https://github.com/webpack-contrib/sass-loader) | Loads a SASS/SCSS file and compiles it to CSS. |
