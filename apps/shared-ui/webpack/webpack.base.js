const path = require('path');
const ModuleFederationPlugin =
	require('webpack').container.ModuleFederationPlugin;
const deps = require('../package.json').dependencies;

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	output: {
		path: path.resolve(__dirname, '../build'),
		publicPath: 'auto',
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
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom'],
				},
			},
		}),
	],
};
