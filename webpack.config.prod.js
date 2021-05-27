const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/javascript/index.js',
	output: {
		path: path.resolve(__dirname, 'assets', 'scripts'),
		filename: 'bundle.production.js',
		publicPath: './assets/scripts/'
	},
	devtool: 'source-map',
}