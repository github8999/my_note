使用vue-cli快速创建的vue项目目录如下：

build  -- webpack相关配置以及服务启动文件，配置多依赖于下边的config文件夹中内容
config -- vue基本配置文件，如监听端口，打包输出等配置
node_modules -- 安装依赖包的目录文件
src -- 页面以及业务逻辑文件夹，在此文件夹下进行项目开发
static -- 静态资源，可存放一些不需要进行打包的资源文件
.babelrc -- ES6语法编译配置，用来将ES6代码转换为浏览器识别的代码(ES6转ES5)
.editorconfig -- 代码规范化配置文件
.gitignore -- git上传需要忽略的文件格式
.postcssrc.js -- 转换css工具，用js来处理css
index.html -- 页面入口
package.json -- 项目基本信息，项目开发所需的模块，项目名称，版本等
readme.txt -- 项目说明，说明一下此项目作何使用等。

index.html  　项目页面入口(可删除)，通常是进行根节点功能设置，如需要引用静态资源文件夹static中的文件时，建议在index.html中进行引入；手机端文件在此文件中更改viewport等。

app.vue时项目的主组件，所有页面都是在app.vue下切换的(基于此组件，若多页面的则不是)。其中<router-view/>是子路由视图。

main.js是入口文件，主要作用是初始化vue实例并使用需要的插件。使用某些插件使用Vue.use(xxx)。


路由配置文件，地址为src>router>index.js。可进行自定义配置，然后引入到main.js中，加入至vue实例。

自己增加文件，作用为数据仓库，对项目中公用数据进行设置存储。

## vue-cli
+ 通过 @vue/cli 搭建交互式的项目脚手架。
+ 基于 webpack 构建，并带有合理的默认配置.

## vue-cli安装
+ npm install -g @vue/cli
+ npm install -g @vue/cli-service-global
+ 测试版本 vue -V  3.4.1 安装成功

## 创建项目
+ vue create xxx
+ 选择   Manually select features
+ 选择 
	- babel
	- Router
	- Vuex
	- css Pre-processors

## 运行项目
+ 在根目录下,执行npm run serve

npm install -d 就是 npm install --save-dev 安装到开发环境 例如 gulp ，babel，webpack 一般都是辅助工具
npm insatll -s 就是npm install --save  安装到生产环境 如 vue ,react 等
