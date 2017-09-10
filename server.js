var express = require('express');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var path = require('path');
var fs = require('file-system');
var YAML = require('json2yaml');
var app = express();
var port = process.env.PORT || 3001;

var compiler = webpack(webpackConfig);
var router = express.Router();

var staticDir = './';
app.use(express.static(staticDir));

app.use(require("webpack-dev-middleware")(compiler, {
  	hot: true,
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
	 log: console.log,
	 path: '/__webpack_hmr',
	 heartbeat: 10 * 1000
 }));

 app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

var server = app.listen(port, function() {
			var port = server.address().port;						
});

///////////////////////////

router.get('/about', function(req, res) {
	console.log('about us page');
	res.send('im the about page!');
});


app.use('/', router);
