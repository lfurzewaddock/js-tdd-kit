"use strict";

const merge = require("webpack-merge");
const config = require("./common");

module.exports = merge(config, {
  devtool: "source-map",
});
