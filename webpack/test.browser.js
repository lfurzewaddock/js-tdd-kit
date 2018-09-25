"use strict";

const CleanWebpackPlugin = require("clean-webpack-plugin");
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
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "inline-source-map",
  node: {
    fs: "empty",
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
    }),
    new HtmlWebpackPlugin({
      title: "js-tdd-kit",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
};
