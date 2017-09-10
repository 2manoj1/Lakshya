var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var nodeEnv = process.env.NODE_ENV || "development";
var branchEnv = process.env.BRANCH_ENV || "dev";

var extractLess = new ExtractTextPlugin({
  filename: "stylesBundle.[hash].css",
  disable: false
});

// the path(s) that should be cleaned
var pathsToClean = [
  './dist'
]

// the clean options to use
var cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    scriptBundle: [
      "babel-polyfill",
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
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
        "BRANCH_ENV": JSON.stringify(branchEnv),
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: './src/indexTemplate.ejs'
      }),
    extractLess
  ]
};
