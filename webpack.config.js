var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var nodeEnv = process.env.NODE_ENV || "development";
var branchEnv = process.env.BRANCH_ENV || "dev";

var extractLess = new ExtractTextPlugin({
  filename: "stylesBundle.[hash].css",
  disable: false
});

module.exports = {
  entry: {
    scriptBundle: [
      "babel-polyfill",
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      "webpack/hot/dev-server",
      "./src/index.js"
    ]
  },

  output: {
    path: path.resolve(__dirname,"./dist"),
    publicPath: "/",
    filename: "[name].[hash].js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader',],
        exclude: /node_modules/
      },
      {
        include: /\.json$/,
        use: ["json-loader"]
      },
      {
        test: /\.yaml$/,
        include: path.resolve('data'),
        use: 'yaml-loader',
      },
      {
        test: /\.css$/,
        use: extractLess.extract({
          use: [
            {
              loader: "css-loader",
            }, 
            {
              loader: "less-loader"
            }
          ],
          fallback: "style-loader",
          publicPath: "/"
        })
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname),
      "node_modules"
    ],
    extensions: [".json", ".js", ".jsx"]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
     new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: './src/indexTemplate.ejs'
      }),
    extractLess
  ]
};
