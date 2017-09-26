开发工具：
	Node: npm管理包
	Nginx： 代理解决跨域
	工具： 任意文本编辑器 sublime webstorm

框架使用的语言：
	js:  jquery  支持ES6语法
	css： Less预编译
	模板引擎： handlebars

nginx配置：
nginx在svn中tools文件夹;
nginx配置将conf/nginx.conf中
        location /client {
          proxy_pass http://10.108.26.164（本机IP）:8090/;
        }
        location /server {
          proxy_pass http://10.108.26.48:7070/（服务器地址）;
        }
        location /dist {
          proxy_pass http://10.108.26.164（本机IP）:8090/dist;
        }

运行步骤
1. 安装node(安装包在svn中tools文件夹)（注： 首次需要）
cmd打开终端 npm install -g cnpm --registry=https://registry.npm.taobao.org //淘宝映像，速度快

2. 打开到mall-pro，目录
3. cnpm install //安装依赖包 （注： 首次需要）
4. npm run dev //编译项目 编译到dist文件
5. 启动nginx.exe
6. 输入网址http://10.108.26.164(本机IP):8080/client/dist/view/index.html
   备注：以上dist/view/index.html 是src/view/html.hbs编译过来的；
		 如需访问其他页面，换成该文件下的其他文件名


文件目录：
common 	--公共方法
components --  公共组件
dist	--编译后文件
doc		--文档存储
node_modules	--管理包
src		--开发代码
	--font
	--hbs   --引用的模板
	--helpers
	--imgs
	--js    事件、ajax调接口、渲染模板
	--less
	--views  --各个页面的入口

utils	--工具
package.json	--node包管理配置
webpack.config.js 		--webpack配置



开发步骤：

1、添加页面
src
	--views  添加页面news.hbs
2、models中js发ajax取数据，处理数据格式；controllers中js渲染模板
src
	--js
		--controllers
			--模块
				--news.js
3、添加编译入口
common
	--config.js  pageArr中添加"模块/文件名" 如index/index