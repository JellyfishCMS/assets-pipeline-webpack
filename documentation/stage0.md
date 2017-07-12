# WEBPACK CONFIGURATION STAGE 0

* Getting Started
* Creating a basic configuration
  * Splitting the configuration
  * Creating a simple Configuration file
* Installing a plugin
* Running Webpack
* Preparing the next stage configuration
* Conclusion

## Road Map

At this stage you will learn:

* [ ] How to install webpack
* [ ] How to define a basic configuration file
  * [ ] How to define the entry point of your bundles
  * [ ] How to define the output folder
  * [ ] How to Add a plugin to your configuration
* [ ] create a npm shortcut to run webpack via `npm run base`

Your configuration will contains:
  * [ ] A `config.js` file with all the variable that you migh change from one project to another
  * [ ] A `webpack.conf` folder with all you configuration files
    * [ ] A `webpack.base.js` file with a pre-configured and commented webpack configuration inspired from [the official documentation](https://webpack.js.org/configuration/)
    * [ ] A `_webpack.default.js` file ready to create the next stage configuration

Your configuration will be able to:
  * [ ] Bundle JavaScript files
  * [ ] Automatically install and save your missing dependencies

# Getting Started

As always, we will download our dependencies with [node.js](https://nodejs.org/en/) .

```
npm i webpack --save-dev
```

# Creating a basic configuration

Webpack configuration is define through a **JavaScript Object**. The first step to learn how to use Webpack is to get familiar with the configuration options of Webpack.

You can refer to the [offical documentation](https://Webpack.js.org/configuration/)

## Splitting the configuration

> Divide and rule

We aim to create a configuration that is as modular as possible by dividing the configuration in several files according to their purpose.

This _jellyfish-assets-pipeline-webpack_ project contain at this stage a standard pre-configure **JavaScript Object** in the file called `webpack.base.js`.

The idea is that this file will be the same for all our future Webpack configuration. We will creating more specific configuration by extending this file.

When creating a new configuration we would create a new JavaScript file and programmatically modify the **JavaScript Object** provided by the `webpack.base.js` file. `webpack.default.js` is a template for those new configuration. __We will see how in details in the next Stage of this tutorial__.

All our configuration files will be stored in a folder called `webpack.conf`.

In addition, we will be using a `config.js` file to define some global variable for our Webpack configuration.

As a result, our file tree structure look like this:

```
+- documentation
+- webpack.conf           // Contains all the available Webpack configurations
|`+- webpack.base.js        // Our default Webpack configuration Object
| +- webpack.default.js     // Blank Webpack configuration that we will use as a template for the future configurations
| +- ...                    // Another Webpack configuration file
`+- config.js             // Used to define our VARIABLES
```

## Configuration file

So now you should have a serious look at `webpack.base.js`, and focus your attention on this part of the configuration:

```javascript
let webpack_base = {
  entry: config.entry, // string | array | object
    // Here the application starts executing and webpack starts bundling

  output: {
    path: path.resolve(process.cwd(), config.output.path), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: config.debug ? '[name].js' : '[name].[chunkhash:8].js', // string
    // the filename template for our bundles

    publicPath: config.output.publicPath, // string
    // the url to the output directory resolved relative to the HTML page

    //library: "MyLibrary", // string
    // the name of the exported library

    //libraryTarget: "umd", // enum
    // the type of the exported library

    /* Advanced output configuration (see: https://webpack.js.org/configuration/) */

  },

  [...]

}
```

The minimum required configuration is defining the `entry` and an `output` of your applicationx thus we will dedicate the next two section to it.

Given that the `entry` and the `output` chnage from project to project. We want to make those easy to access so we use  `config.js` to stored there value.

### Entry

The entry can be a **string** defining the **path** of the JavaScript file you want to bundle.

```
entry: 'src/js/app.js'
```

You can also provide an **array** defining the list of files you want to bundles

```
entry: [
  'src/js/app1.js',
  'src/js/app2.js',
]
```

Finally you can provide an **Object** and this is the method you need to focus on, because it allow you to correctly define your bundles:

```
entry: {
  bundle1 : [
    //list of entry files for the bundle1
  ],
  bundle2 : [
    //list of entry files for the bundle2
  ]
}
```

### Output

There are two important properties:

* path, **absolute path** to the directory you want to output your generated files.
  However you don't want to hard code the absolute path, otherwise you configuration will not work on another computers.

  Here is the solution:
  ```js
  path.resolve(process.cwd(), config.output.path)
  ```
  `path.resolve(a,b)` provide us the absolute path of `b` relative to `a`. We get the absolute path from where we ran our command line with `process.cwd()` and we define we in `config.js` the relative path to our output folder
* filename, a rule to define how to name our output files

  ```js
  filename: config.debug ? '[name].js' : '[name].[chunkhash:8].js'
  ```
  this is a good example. In developemt (`config.debug` set to true) the output file will not change (app.js in input app.js as an output) and so every time you run webpack you will overide the previous file, however in production the fille name will get a hash of 8 character will be added so you do not override you previous module version.

## Installing a plugin

It sucks to stop webpack and all our scripts just to `npm install` a dependency you didn't know you needed until now.

Instead, a [webpack plugin](https://www.npmjs.com/package/npm-install-webpack-plugin) automatically triggered `npm install` when you need it whithout interepting webpack.

First, install the pugin via npm.

```
npm install --save-dev npm-install-webpack2-plugin
```

Second, reference this plugin in your wbpack configuration.

1. require your plugin/module on top of `webpack.base.js`

  ```
  const NpmInstallPlugin = require('npm-install-webpack-plugin')
  ```
2. Add it to the plugin list in your `webpack.base.js`

  ```
  plugins: [
    new NpmInstallPlugin();
  ],
  ```

I thing it can not be more simple.

## Running Webpack

Now it is time to see what Webpack is capable of (at this stage). We will be Running our script with npm, so lets have a look to the `package.json` file. In the script section you should see this:

```
"scripts": {
  "updates": "npm-check-updates -u",
  "base": "webpack --config webpack.conf/webpack.base.js",
  "build": "NODE_ENV=production webpack --config webpack.conf/webpack.prod.js",
  "dev": "NODE_ENV=development webpack --config webpack.conf/webpack.dev.js"
},
```

The only line that does something (at the moment) is the following:

```
"base": "webpack --config webpack.conf/webpack.base.js",
```

The line in question define the command line `npm run base`. This command is calling `webpack` and give the path of our configuration through the flag `--config`. Pretty simple isn't it?

The other are just there to spoil a bit what we will be doing on the next stages.

Great! We have a working configuration of Webpack that we can run with the command line `npm run base`. **But the question is What does Webpack concretely do ?**.

1. Create a file called `src/js/app.js` containing:

  ```
  var s = require('./hello.js');

  console.log(s)

  ```

  You notice that we are using `require` to use another file inside our js file and so define the dependencies between both files.

2. Create a file called `src/js/hello.js` containing:

  ```
  module.exports = 'Hello world!';
  ```

3. modify the configuration as following because we want to work in the current directory.

  ```
  const context = './' // Where does project located relatively to the assets-pipeline-Webpack folder -> Current directory
  ```

4. run the command line `npm run base`

5. look at the `./dist` directory

**What happend ?**

You have now a bundled JavaScript file browser ready.

Webpack has translated your "node.js" code which was using the concept of modules into a javascript file that can be use browser. Being capable of using modules to manage JavaScript dependencies is great, however it is fare from a true bundle. There is so much more that Webpack can do for you.

We will be discovering those things in the next stages.

## Preparing the next stage configuration

I told you at the beginning that `webpack.base.js` will be our base configuration and I mentionned that we will be programmatically extending this file to create extra configuration such as development and production.

Thus we will define a boilerplate called `_webpack.default.js`. (the underscore let the file be on the top of the files list, so it is easy to find).

Here is the content of this file:

```javascript
'use strict'

//we need webpack
const webpack = require('webpack')
// we need our base configuration
const webpack_base = require('./webpack.base')
// we need out config variable file
const config = require('../config')

// here you can edit the webpack_base object
// to addapt the configuration to your use case

// we export the result of our configuration
module.exports = webpack_base

```

## Conclusion

1. **Check our Road Map**

2. Learn more about the Plugins and loasers we installed

| Plugin | Description |
|--|--|
| [npm-install-webpack-plugin](https://github.com/webpack-contrib/npm-install-webpack-plugin) | speed up development by automatically installing & saving dependencies with Webpack.|
