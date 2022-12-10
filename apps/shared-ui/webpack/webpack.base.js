const path = require('path');
const ModuleFederationPlugin =
	require('webpack').container.ModuleFederationPlugin;

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	output: {
		path: path.resolve(__dirname, '../build'),
		publicPath: 'auto',
		clean: true,
	},
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
		new ModuleFederationPlugin({
			name: 'shared_ui',
			filename: 'remoteEntry.js',
			exposes: {
				'./Header': './src/Header',
			},
			remotes: {},
			shared: {},
		}),
	],
};
