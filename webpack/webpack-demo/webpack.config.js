const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        app: './src/output.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    // If you have multiple webpack entry points, 
    // they will all be included with script tags in the generated HTML.
    // 默认htmlWebpackPlugin会引入所有bundle
    plugins: [
        // 生成manifest.json清单
        new ManifestPlugin(),
        // 清理dist编译文件夹
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Try HtmlWebpackPlugin',
            // 使用chunks指定导入哪些js
            chunks: ['index'],
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // 使用source-map
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};