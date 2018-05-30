/**
 * Webpack Development Config
 *
 * @module config Configuration options
 */

/**
 * System imports.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Webpack config object.
 */
const config = {
	// The entry point of our app. Where our dependency graph starts.
	entry: [
		path.resolve(__dirname, 'src/scss/index.scss'),
		path.resolve(__dirname, 'src/index.js'),
	],
	// The output location for our compiled bundle.
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, './build'),
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.scss'],
	},
	// Loaders. These transform our code by running them through transpilers.
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
				}),
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
				query: {
					partialDirs: [
						path.join(__dirname, './src/views', 'partials'),
					],
				},
			},
			{
				test: /\.(png|jpg|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'images/[name].[ext]',
					publicPath: '/bov-portfolio/',
				},
			},
		],
	},
	// Webpack plugins - These are like addons that can provide additional functionality.
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin('./css/style.css'),
		new CleanWebpackPlugin(['build'], {
			root: __dirname,
			verbose: true,
			dry: false,
			exclude: ['index.html', 'vendor', 'images'],
		}),
	],
};

/**
 * Export the config.
 */
module.exports = config;
