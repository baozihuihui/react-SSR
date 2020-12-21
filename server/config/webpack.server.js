const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  // * 指明打包环境
  target: "node",
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build"),
  },
  // * 不将依赖文件打包入bundle.js
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/react", // ?处理react代码 安装 @babel/preset-react
            [
              "@babel/preset-env", // ?配置代码适配浏览器最后两个版本 安装 @babel/preset-env
              {
                targets: {
                  browsers: ["last 2 version"],
                },
              },
            ],
          ],
        },
      },
    ],
  },
};
