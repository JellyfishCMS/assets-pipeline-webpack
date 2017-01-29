module.exports = {
  test: /\.js$/,,
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

  loader: "babel-loader",
    // the loader which should be applied, it'll be resolved relative to the context

  options: { },
    // options for the loader
}
