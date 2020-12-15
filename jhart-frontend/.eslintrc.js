module.exports = {
	extends: [
		'prettier',
		'prettier/react',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'prettier/prettier': 0,
	},
};
