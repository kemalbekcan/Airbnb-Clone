const path = require("path");
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    client: false,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "source-map",
};
