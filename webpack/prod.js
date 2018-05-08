"use strict";

const merge = require("webpack-merge");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = require("./common");

module.exports = merge(config, {
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
});
