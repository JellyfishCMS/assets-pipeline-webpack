const context = '../../jellyfish-themes/jellyfish-tests' // Where does your project is located relatively to the assets-pipeline-webpack folder?

module.exports = {

  /**
  ** ENVIRONNEMENT VARIABLES
  ****************************/
  debug: process.env.NODE_ENV === 'development',
  port: 3003,                                             // which port to use when serving your files?
  target: 'web',                                          // What is the target of your application?

  /**
  ** APPLIATION I/O
  ****************************/
  entry: {                                                // Where are the entry point files of your application?
    app: [                                                // You can define several bundle
      context + '/src/js/app.js'
    ]
  },

  output: {
    path: context + '/dist',                              // Where do you want to generate output files?
    publicPath: '/dist/',                                 // How to access to the output_path relatively to the HTML page?
  }

  /**
  ** Plugins configuration
  ****************************/

}
