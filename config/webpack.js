const { join } = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const babelOpts = require('./babel');
const styles = require('./styles');
const setup = require('./setup');

const dist = join(__dirname, '..', 'dist');
const exclude = /(node_modules|bower_components)/;

module.exports = env => {
	const isProd = env && env.production;

	if (isProd) {
		babelOpts.presets.push('babili');
	} else {
		styles.unshift({ loader:'style-loader' });
	}

	return {
		entry: {
			app: './src/index.js',
			vendor: [
				// pull these to a `vendor.js` file
				'preact'
			]
		},
		output: {
			path: dist,
			filename: '[name].[hash].js',
			publicPath: '/'
		},
		resolve: {
			alias: {
				// Run `npm install preact-compat --save`
				// 'react': 'preact-compat',
				// 'react-dom': 'preact-compat'
			}
		},
		module: {
			rules: [{
				test: /\.jsx?$/,
				exclude: exclude,
				loader: {
					loader: 'babel-loader',
					options: babelOpts
				}
			},	
			  { 
      	test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      	loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    		}, 
    		{
				test: /\.(sass|scss)$/,
				use: isProd ? ExtractText.extract({ fallback:'style-loader', use:styles }) : styles
			}]
		},
		plugins: setup(isProd),
		devtool: !isProd && 'eval',
		devServer: {
			contentBase: dist,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd
		}
	};
};
