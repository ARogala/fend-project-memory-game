const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
	mode: 'development',
	entry: {
		main: './src/app.js'
	},
	output: {
		filename: 'main.js',
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
			},
			{
				test: /\.(svg|png|jpg|jpeg|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets'
						}
					}
				]
			}
		]
	}
};
