const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

module.exports = {
  entry: {
    first: "./src/app/first.js",
    second: "./src/app/second.js",
    style: ["./src/assets/style.scss"],
  },
  output: {
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new RemovePlugin({
      after: {
        include: ["./dist/style.js"],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  mode: 'development',
};
