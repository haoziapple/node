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
    output: {
        path: path.resolve(__dirname, "./dist"),
        // 待解决：publicPath的设置问题
        // 设置了publicPath会导致devServer无法监听js的变化，不设置又会导致上面htmlPlugin生成页面的js地址错误
        // publicPath: '../',
        filename: '[name].js'
    },
    plugins: configPlugins,
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        port: 8888,
    }
};