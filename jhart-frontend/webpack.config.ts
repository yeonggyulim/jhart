import * as path from 'path';
import * as webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends webpack.Configuration {
	devServer?: WebpackDevServerConfiguration;
}

const WDS_PORT = 8080;

const mode = process.env.NODE_ENV ? 'production' : 'development';

const config: Configuration = {
	mode,
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: '[name]-bundle.js',
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
				test: /\.scss$/,
				exclude: /(node_modules)/,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: {
								loader: MiniCssExtractPlugin.loader,
								options: {
									publicPath: './',
								},
						  },
					'css-loader',
					'sass-loader',
				],
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
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],

	devServer: {
		overlay: true,
		port: WDS_PORT,
	},
};

export default config;
