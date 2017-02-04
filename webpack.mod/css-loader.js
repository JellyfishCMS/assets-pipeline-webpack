module.exports = {
  test: /\.css$/,
  // The Condition must match, so the loaders is used for the given file
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  //include: [],
    // The Condition must match, to include the files.
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  exclude: [/node_modules/, /libs/, /bower_components/],
    // The Condition must NOT match. Those files are excluded
    // The convention is the provide a RegExp or array of RegExps here, but it's not enforced.

  //issuer: { test, include, exclude },
    // conditions for the issuer (the origin of the import)

  //enforce: "pre", // possible values: "pre" | "post"
    // flags to apply these rules

  //loader: "",
    // the loader which should be applied, it'll be resolved relative to the context

  //options: { },
    // options for the loader

  use: [
    { loader: "style-loader" },
    { loader: "css-loader" }
  ]
    // apply multiple loaders and options
}
