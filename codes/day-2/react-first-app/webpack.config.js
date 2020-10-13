//1. input files: 
//entry file: index.js
//2. output:
//build, bundles.js
//3. use loaders
//4. source map
//5. dev server
//6. plugins:
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigObject = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(html|htm)$/,
                use: 'html-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.(js|ts|jsx|tsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 4000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ]
}
module.exports = webpackConfigObject;


