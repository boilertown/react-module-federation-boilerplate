const path = require('path');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin =
	require('webpack').container.ModuleFederationPlugin;

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	target: 'web',
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	plugins: [
		new Dotenv(),
		new ModuleFederationPlugin({
			name: 'boring_bear',
			filename: 'remoteEntry.js',
			remotes: {
				header: 'header@http://localhost:2024/remoteEntry.js',
			},
			exposes: {},
			shared: ['react', 'react-dom'],
		}),
	],
};
