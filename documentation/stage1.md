# WEBPACK configuration stage 1

By defaut Webpack only manage javascript files, however a module systems also called loaders let you go further by including other type of files in your modules (html, css, less, sass, jade, etc.)

## Loaders

Webpack possess a systems called `loaders` that allow you to load other type of files than JavaScript.

* First find the loader you need either on [this page](https://github.com/webpack/webpack) or on [npm](https://www.npmjs.com/)

* Then you must explain to Webpack How to use this loader.

In the module section of your webpack configuration (see _webpack.base.js_), you must provide a JavaScript Object that define this loader.


In this repository all the module/loaders configuration are stored in the `webpack.mod` folder. It helps us to keep our main configuration file short and human readable.

Thus, in order to use a loader configuration:

* First we import it in our configuration

```JavaScript
// loaders configurations
const babelLoader = require('../webpack.mod/babel-loader')
```

* Then add it to the **rules** array

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

Configuring your loaders is the same idea than configuring Webpack: We must provide a Javascript Object. It is a bit like filling a form. In that sens you can find a commented standard loader configuration in `webpack.mod/default-loader.js`.

```JavaScript
module.exports = {
  test: '',
    // The Condition must match.
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  //include: [],
    // The Condition must match.
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  exclude: [/node_modules/, /libs/, /bower_components/],
    // The Condition must match.
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  //issuer: { test, include, exclude },
    // conditions for the issuer (the origin of the import)

  enforce: "pre", // ossible values: "pre" | "post"
    // flags to apply these rules

  loader: "",
    // the loader which should be applied, it'll be resolved relative to the context

  options: { },
    // options for the loader
}
```
