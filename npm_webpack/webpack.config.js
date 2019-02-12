const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: "production",
  entry: [
    "./src/index.js",
    "./src/global.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
}
