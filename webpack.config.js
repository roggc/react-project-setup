const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@slices": path.resolve(__dirname, "src/slices"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    scriptType: "text/javascript",
    publicPath: "auto",
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  experiments: {
    outputModule: true,
  },
};
