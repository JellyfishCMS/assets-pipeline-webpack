module.exports = {
  test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
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

  //enforce: "pre", // ossible values: "pre" | "post"
    // flags to apply these rules

  loader: "url-loader",
    // the loader which should be applied, it'll be resolved relative to the context

  options: {
    limit: 10,
    name: '[name].[hash:7].[ext]'
  },
    // options for the loader

  //use: [],
    // apply multiple loaders and options

}