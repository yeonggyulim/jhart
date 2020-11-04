const presets = [
	[
		'@babel/preset-env',
		{
			targets: {
				chrome: '40',
				ie: '11',
			},
			useBuiltIns: 'usage',
			corejs: { version: 3, proposals: true },
		},
	],
	'@babel/preset-typescript',
	'@babel/preset-react',
];
const plugins = [
	'@babel/plugin-transform-template-literals',
	'@babel/plugin-transform-arrow-functions',
];

module.exports = { presets, plugins };
