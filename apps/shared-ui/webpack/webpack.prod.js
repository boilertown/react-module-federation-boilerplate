const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				/**
				 * No `ts-loader` since we need faster build speed.
				 */
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
});
