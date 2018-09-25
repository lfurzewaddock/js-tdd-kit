"use strict";

const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

const config = require("./common");

module.exports = merge(config, {
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "../dist"),
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
