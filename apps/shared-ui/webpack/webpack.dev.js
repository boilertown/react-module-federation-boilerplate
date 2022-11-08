const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				/**
				 * Apply Type-safety at build time.
				 *
				 * @see https://evanlouie.github.io/posts/typescript-babel-preset-typescript-ts-loader
				 */
				use: ['babel-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, '../build'),
		port: 2024,
		hot: true,
		open: true,
		client: {
			logging: 'none',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, '../src/index.ejs'),
		}),
	],
	devtool: 'eval-cheap-source-map',
	stats: 'minimal',
});
