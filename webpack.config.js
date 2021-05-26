const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/javascript/index.js',
	output: {
		path: path.resolve(__dirname, 'assets', 'scripts'),
		filename: 'bundle.js',
		publicPath: './assets/scripts/'
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
	    writeToDisk: true,
	}
}