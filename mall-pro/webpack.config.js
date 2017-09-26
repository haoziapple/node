const path = require("path");
var webpack=require('webpack');
// let ExtractTextPlugin = require('extract-text-webpack-plugin');
// let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var configPlugins = [];//webpack plugins
var entries = {style: './src/less/index/index.less'}; //打包样式

//页面配置
var config = require('./common/config.js');
var pageArr = config.pageArr;
pageArr.forEach((str) => {
  var mod = str.split('/')[0],
      page = str.split('/')[1];
  var htmlPlugin = new HtmlWebpackPlugin({
    filename: `/view/${page}.html`,
    template: `./src/views/${page}.hbs`,
    chunks: [`${page}`, 'style'],
    inject:true,    //允许插件修改哪些内容，包括head与body
    hash:true,    //为静态资源生成hash值,
    minify:{    //压缩HTML文件
      removeComments:true,    //移除HTML中的注释
      collapseWhitespace:false    //删除空白符与换行符
    }
  });
  configPlugins.push(htmlPlugin);
  entries[page] = `./src/js/controllers/${mod}/${page}.js`;
});
configPlugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: '../',
    filename: '[name].js'
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        loader: 'style-loader!css-loader!less-loader'
        // loader: ExtractTextPlugin.extract('style-loader', 'css!less')
      },
      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
          options: {helperDirs: path.resolve(__dirname, "./views/helpers")}
        }]
      },
      {
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          loader: 'file-loader!url-loader?limit=8192&name=./src/imgs/[hash].[ext]'
      },
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      },
      {
　　　　　test: /\.(htm|html)$/,
　　　　　loader: 'html-withimg-loader'
　　　}
    ],
  },
  plugins: configPlugins,
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    alias:{
      '$': path.join(__dirname, 'node_modules/jquery/dist/jquery'),
      'validator': path.join(__dirname, 'node_modules/nice-validator/dist/jquery.validator')
    }
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    host: config.host,
    port: 8090,
  },
};
