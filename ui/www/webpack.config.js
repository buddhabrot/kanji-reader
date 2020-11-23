const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const WasmPackWatcherPlugin = require('wasm-pack-watcher-plugin');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html']),
    new WasmPackWatcherPlugin({
      sourceRoot: path.resolve(__dirname, '../src'),    // default: __dirname/src
      crateRoot: path.resolve(__dirname, '..'),           // default: __dirname
      mode: "release"                               // default: release
    })]
};
