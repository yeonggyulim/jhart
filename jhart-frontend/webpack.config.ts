import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends webpack.Configuration {
	devServer?: WebpackDevServerConfiguration;
}

const WDS_PORT = 8080;

const mode = process.env.NODE_ENV ? 'production' : 'development';

const config: Configuration = {
	mode,
	entry: ['./polyfills.js', './src/index.tsx'],
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: '[name]-bundle.js',
		// publicPath: '/',
	},

	devtool:
		mode === 'development' ? 'inline-source-map' : 'cheap-module-source-map',

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.(js|ts|jsx|tsx)$/,
				exclude: /(node_modules)/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'JHArt',
			template: './public/index.html',
			filename: './index.html',
		}),
	],

	devServer: {
		overlay: true,
		port: WDS_PORT,
		proxy: {
			'/api': 'http://localhost:4000',
		},
		open: true,
		hot: true,
		historyApiFallback: true,
	},
};

export default config;
