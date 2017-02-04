const context = '../../jellyfish-themes/jellyfish-tests/' // Where does your project is located relatively to the assets-pipeline-webpack folder?

module.exports = {

  /**
  ** ENVIRONNEMENT VARIABLES
  ****************************/
  debug: process.env.NODE_ENV === 'development',
  port: 3003,
  target: 'web',                                          // What is the target of your application?

  /**
  ** APPLIATION I/O
  ****************************/
  entry: {                                                // Where are the entry point files of your application?
    app: [
      //context + 'src/css/app.css',                      //# In stage0 we don't have yet the appropriated loader
      context + 'src/js/app.js'
    ]
  },
  output_path: context + '/dist',                         // Where do you want to generate output files?
  output_publicPath: context,                             // How to access to the output_path relatively to the HTML page?
  // webpack-dev-server
  output_contentBase: context + '/dist'                   // Which folder do you wanna use to run the dev server?

  /**
  ** Plugins configuration
  ****************************/

}
