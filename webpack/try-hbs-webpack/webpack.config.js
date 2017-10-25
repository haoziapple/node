var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var configPlugins = [];//webpack plugins

var entries = {};

// 页面配置
var config = require('./common/config.js');
var pageArr = config.pageArr;

pageArr.forEach((str) => {
    console.log("测试"+str);
    var mod = str.split('/')[0];
    var page = str.split('/')[1];

    var htmlPlugin = new HtmlWebpackPlugin({
        filename: `/view/${page}.html`,
        template: `./src/views/${page}.hbs`,
        chunks: [`${page}`, 'style'],
        inject: true,    //允许插件修改哪些内容，包括head与body
        hash: false,    //为静态资源生成hash值,
        minify: {    //压缩HTML文件
            removeComments: true,    //移除HTML中的注释
            collapseWhitespace: false    //删除空白符与换行符
        }
    });
    configPlugins.push(htmlPlugin);
    entries[page] = `./src/js/controllers/${mod}/${page}.js`;
});
entries['bundle'] = `./main.js`;
console.log("=====" + path.resolve(__dirname, "./dist"));
module.exports = {
    entry: entries,
    // entry: './main.js',
   
    output: {
        path: path.resolve(__dirname, "./dist"),
        // publicPath: '../',
        filename: '[name].js'
    },
    // output: {
    //     path: path.resolve(__dirname, "./dist"),
    //     filename: 'bundle.js'
    // },
    plugins: configPlugins,
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        port: 8888,
    }
};