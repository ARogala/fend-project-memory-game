
module.exports = {
	entry: {
		main: './src/app.js'
	},
	module: {
		rules: [
			{
				test: /\.(svg|png|jpg|jpeg|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name]-[hash].[ext]',
							outputPath: 'assets'
						}
					}
				]
			}
		]
	}
};
