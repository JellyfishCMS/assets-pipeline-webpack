## Assets pipeline with **Webpack**

Webpack is a [node.js](https://nodejs.org/en/) **module bundler** dedicated to _front-end development_. You create **modules** around a JavaScript files and Webpack generate the static files (also called *assets*) that you need to use those modules in your web applications. What you should remember is that now with Webpack you can adopt a **modular approach** when developing and you don't have to worry about anything excepted configuring Webpack.

Fortunately, this repository is a set of stater Webpack configuration. And also a progressive way to learn how to create you personal configuration.

The repository contains a tutorial divided in several stage. As you go from stage to stage, are more complex configuration is available, which means more feature to help you in you development. Each stage is stored on a separated branch on github, so just checkout to the next stage to progress in the tutorial or jump directly to the stage you need.

* [Stage 0: Commented Webpack Configuration](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage0.md)

## Settup

In order to setup the project I advise you to use the package manager [yarn](https://yarnpkg.com/) instead of npm

```shell
yarn
```

Then run the script you need, for example you can the default configuration by typing

```shell
npm run base
```

## features & Command lines

This configuration can:
  * Bundle JavaScript files
  * Automatically install and save your missing dependencies

Here is the list of script you can run:

|CLI| Implemented at| Description |
|--|--|--|--|
|`npm run base`  | [Stage 0] | Publish you JavaScript file(s) taking into account the dependencies|
|`npm run build` | [Stage 1] | Publish your assets to be ready in production|
|`npm run dev`   | [Stage 2] | Run the development server and activate the Hot module replacement (HRM)|
