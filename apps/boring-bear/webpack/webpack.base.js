const path = require('path');
const ModuleFederationPlugin =
	require('webpack').container.ModuleFederationPlugin;
const deps = require('../package.json').dependencies;

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
		new ModuleFederationPlugin({
			name: 'boring-bear',
			filename: 'remoteEntry.js',
			remotes: {
				shared_ui: 'shared_ui@http://localhost:2024/remoteEntry.js',
			},
			exposes: {},
			shared: {
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
