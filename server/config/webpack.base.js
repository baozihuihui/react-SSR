module.exports = {
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
