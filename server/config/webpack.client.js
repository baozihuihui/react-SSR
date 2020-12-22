const path = require("path");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base");

const webpackClientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../clientDist"),
  },
};

module.exports = merge(webpackBaseConfig, webpackClientConfig);
