var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var port = 8080

// add dev-server entry point allowing HMR in the browser 
// 'only-dev-server' doesn't reload the browser on errors
config.entry.push('webpack/hot/only-dev-server')

// add host + port to allow for websocket connection
config.entry.push('webpack-dev-server/client?http://0.0.0.0:' + port)

new webpackDevServer(webpack(config), {
    contentBase: './examples', // set entry point for served html
    hot: true, // support hot module replacement
}).listen(port, '0.0.0.0', function (err, result) {
    if (err) {
	console.log(err)
    }

    console.log('Listening at localhost:' + port)
});
