"use strict";

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
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
  target: "node",
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
    }),
    new CopyWebpackPlugin([{ from: "**/*.environment.js", to: "../dist" }]),
    new webpack.SourceMapDevToolPlugin({
      test: /\.js$/,
      filename: "[name].bundle.js.map",
      moduleFilenameTemplate: "[absolute-resource-path]",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
};
