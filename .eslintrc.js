module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['react-hooks'],
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'warn',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
	rules: {
		'react/jsx-no-bind': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
