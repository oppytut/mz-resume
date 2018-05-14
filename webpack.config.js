const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // sass-loader recomendation in production mode, convert
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); // auto reload browser

module.exports = {
	entry: {
		mz: ['./src/sass/mz.scss']
	},
	output: {
		path: path.resolve(__dirname, './public/'),
		filename: './js/[name].js'
	},
	mode: 'production',
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader'
			]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: './css/[name].css'
		}),
		new BrowserSyncPlugin ({
			server: {
				baseDir: './public/',
				serveStaticOptions: {
					extensions: ['html']
				}
			},
			files: [
				'./src/sass/mz.scss',
				'./public/index.html'
			],
			browser: ['chromium-browser']
		}),
	]
};
