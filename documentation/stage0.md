# Webpack configuration stage 0

Webpack configuration is define through a configuration **JavaScript Object**. The first step to learn how to use webpack is to get familiar with the configuration options of webpack.

You can refer to [offical documentation](https://webpack.js.org/configuration/)

The _jellyfish-assets-pipeline-webpack_ project contain at this stage a standard pre-configure **JavaScript Object**  in the file called `webpack.base.js`.

The idea is that this file would be the same for any of our future webpack configuration. When creating a new configuration we would create a new JavaScript file such as `webpack.default.js` and programmatically modify the **JavaScript Object** provided by the `webpack.base.js` file.

In addition to that we would use a `config.js` file were we can define some global variable for our Webpack configuration.

In oder to summarize this is our file tree structure:

```
+- documentation
+- webpack.configs        // Contains all the available webpack configurations
`+- config.js             // Used to define our VARIABLES
 +- webpack.base.js       // Our default Webpack configuration Object
 +- webpack.default.js    // Blank Webpack configuration that we will use as a template for the future configurations
 +- ...                   // Another webpack configuration file
```
