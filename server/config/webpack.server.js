const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const webpackBaseConfig = require("./webpack.base");

const webpackServerConfig = {
  // * 指明打包环境
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../serverDist"),
  },
  // * 不将依赖文件打包入bundle.js
  externals: [nodeExternals()],
};

module.exports = merge(webpackBaseConfig, webpackServerConfig);
