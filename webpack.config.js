module.exports = {
  entry: "./lib/entry.js",
  output: {
    path: __dirname,
    filename: "lib/bundle.js"
  },
  module: {
    loaders: []
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
