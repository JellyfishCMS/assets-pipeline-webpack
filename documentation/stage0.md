# WEBPACK configuration stage 0

* Getting Started
* Create a basic configuration
  * Directory structure
  * Configuration file
* Install a plugin
* Running Webpack
* Conclusion

# Getting Started

As always with node.js we will download our dependencies.

```
npm i webpack --save-dev
```

It sucks to stop webpack and all our scripts just to `npm install` a dependency you didn't know you needed until now.

Instead, a [webpack plugin](https://www.npmjs.com/package/npm-install-webpack-plugin) let us use require or import how you normally would and `npm install` will happen automatically to install & save missing dependencies while you work!

```
npm install --save-dev npm-install-webpack-plugin
```

# Create a basic configuration

Webpack configuration is define through a **JavaScript Object**. The first step to learn how to use Webpack is to get familiar with the configuration options of Webpack.

You can refer to the [offical documentation](https://Webpack.js.org/configuration/)

## Directory structure

This _jellyfish-assets-pipeline-webpack_ project contain at this stage a standard pre-configure **JavaScript Object** in the file called `webpack.base.js`.

The idea is that this file will be the same for all our future Webpack configuration. We will creating more specific configuration by extending this file.

When creating a new configuration we would create a new JavaScript file such as `webpack.default.js` and programmatically modify the **JavaScript Object** provided by the `webpack.base.js` file. __We will see how in details in the next Stage of this tutorial__.

In addition to that, we will be using a `config.js` file to define some global variable for our Webpack configuration.

As a result our file tree structure look like this:

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
    path: config.output.path, // string
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

The minimum configuration is to define the `entry` and an `output`, so lets explain those two configuration element. We want Webpack to do even more stuff so there is a tones of other configuration elements. In order to make those easy to access you noticed that we have variables in our `config.js`, because the path between our project can change quite often but not the rest of the configuration.

### Entry

### Output

## Install a plugin

In the first section I told you that we will be using a special plugin to `npm install` our modules. Here is how to bind a plugin to Webpack.

1. require your plugin/module

  ```
  const NpmInstallPlugin = require('npm-install-webpack-plugin')
  ```
2. Add it to the plugin list in your `webpack.base.js`

  ```
  plugins: [
    new NpmInstallPlugin();
  ],
  ```

## Running Webpack

Now it is time to see what Webpack is capable of at this stage. We will be Running our script with npm, so lets have a look to the `package.json` file. In the script section you should see this:

```
"scripts": {
  "updates": "npm-check-updates -u",
  "base": "webpack --config webpack.conf/webpack.base.js",
  "build": "NODE_ENV=production webpack --config webpack.conf/webpack.prod.js",
  "dev": "NODE_ENV=development webpack --config webpack.conf/webpack.dev.js"
},
```

The only line that actually does something is the following:

```
"base": "webpack --config webpack.conf/webpack.base.js",
```

The other are just there to spoil a bit what we will be doing on the next stages.
The line in question define the command line `npm run base`. This command is calling `webpack` and give the path of our configuration through the flag `--config`. Pretty simple isn't it?

Great! We have a working configuration of Webpack that we can run with the command line `npm run base`. **But the question is What does Webpack concretely do ?**. (first make sure you are aware of the concept of[modules for node.js](https://nodejs.org/api/modules.html))

* 1- Create a file called `src/js/app.js` containing:

```
var s = require('./hello.js');

console.log(s)

```

You notice that we are using `require` to use another file inside our js file and so define the dependencies between both files.

* 2- Create a file called `src/js/hello.js` containing:

```
module.exports = 'Hello world!';
```

* 3- modify the configuration as following because we want to work in the current directory.

```
const context = './' // Where does project located relatively to the assets-pipeline-Webpack folder -> Current directory
```

* 4- run the command line `npm run base`

* 5- look at the `./dist` directory

**What happend ?**

You have now a bundled JavaScript file browser ready.

Webpack has translated your "node.js" code which was using the concept of modules into a javascript file that can be use browser. Being capable of using modules to manage JavaScript dependencies is great, however it is fare from a true bundle. There is so much more that Webpack can do for you.

We will be discovering those things in the next stages.

# Conclusion
