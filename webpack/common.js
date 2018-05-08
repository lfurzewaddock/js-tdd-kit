"use strict";

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "../src")],
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
        include: [path.resolve(__dirname, "../src")],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
    }),
    new HtmlWebpackPlugin({
      title: "js-tdd-kit",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
};
