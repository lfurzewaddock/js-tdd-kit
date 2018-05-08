"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "../test"),
  entry: {
    app: "./webpack",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "./")],
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          emitError: true,
          failOnWarning: true,
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "./")],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "../dist"),
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "js-tdd-kit",
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
};
