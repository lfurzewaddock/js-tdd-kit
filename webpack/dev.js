const merge = require("webpack-merge");
const webpack = require("webpack");

const config = require("./common");

module.exports = merge(config, {
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: "../dist",
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
});
