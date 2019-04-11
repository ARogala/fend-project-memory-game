const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack-common.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader', //2. loads into dom
					'css-loader' //1. turns css into common JS
				]
			}
		]
	}
});
