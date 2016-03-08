var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: debug ? 'inline-sourcemap' : null,
	entry: './src/index.js',
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
					plugins: ['react-html-attrs']
				}
			}
		]
	},
	output: {
		path: path.join(__dirname, '/build/js/'),
		filename: 'app.min.js'
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
	]
};
