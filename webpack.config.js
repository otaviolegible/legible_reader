const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      react: path.join(__dirname, "node_modules/react")
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "src"),
    hot: true
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};