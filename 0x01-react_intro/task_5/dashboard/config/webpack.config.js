// config/webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, '../dist')
		},
		hot: true,
		port: 8080, // optional: specify port if needed
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../dist/index.html'),
		}),
	],
	devtool: 'inline-source-map',
};
