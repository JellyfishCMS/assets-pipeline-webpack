# WEBPACK configuration stage 0

## Define the basic Webpack configuration

Webpack configuration is define through a **JavaScript Object**. The first step to learn how to use webpack is to get familiar with the configuration options of webpack.

You can refer to the [offical documentation](https://webpack.js.org/configuration/)

The _jellyfish-assets-pipeline-webpack_ project contain at this stage a standard pre-configure **JavaScript Object** in the file called `webpack.base.js`.

The idea is that this file would be the same for any of our future webpack configuration. When creating a new configuration we would create a new JavaScript file such as `webpack.default.js` and programmatically modify the **JavaScript Object** provided by the `webpack.base.js` file. (We will see how in details in the next Stage of this tutorial).

In addition to that, we will be using a `config.js` file to define some global variable for our Webpack configuration.

This is our file tree structure:

```
+- documentation
+- webpack.conf           // Contains all the available webpack configurations
`+- config.js             // Used to define our VARIABLES
 +- webpack.base.js       // Our default Webpack configuration Object
 +- webpack.default.js    // Blank Webpack configuration that we will use as a template for the future configurations
 +- ...                   // Another webpack configuration file
```

## Running webpack

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
const context = './' // Where does project located relatively to the assets-pipeline-webpack folder -> Current directory
```

* 4- run the command line `npm run base`

* 5- look at the `./dist` directory

**What happend ?**

You have now a bundled JavaScript file browser ready.

Webpack has translated your "node.js" code which was using the concept of modules into a javascript file that can be use browser. Being capable of using modules to manage JavaScript dependencies is great, however it is fare from a true bundle. There is so much more that webpack can do for you.

We will be discovering those things in the next stages.
