#  webpack

本质上，webpack 是一个 JS 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

从入口文件 -> 找到依赖的文件, 进入 -> 找出依赖文件的依赖文件 -> 递归到符合终止条件为止 -> 构建依赖关系图 -> 将图中的每个模块打包
  = = >   整个过程是一个递归的关系

##  四个核心概念

###  入口(entry)

**入口起点** 告诉webpack应该使用哪个模块, 来作为构建其内部依赖图的入口, 进入起点后 webpack 会找出入口 直接或间接所依赖的。

每个依赖项随即被处理, 最后输出到称之为bundles的文件中。

可以通过 webpack配置(`webpack.config.js`) 中配置 entry 属性, 来指定一个(或多个入口起点)。默认值为`./src`

###  出口(output)

**output** 告诉 webpack 在哪里输出它所创建的 bundles , 以及如何命名这些文件, 默认值为 `./dist` 。基本上整个应用程序的结构, 都会被编译到你指定的输出路径的文件夹中。

可以通过 webpack配置 中配置 `output` 来处理

###  loader

`loader`让 webpack 识别那些非 JS文件(webpack自身只理解JS)。简单的来说就是把.vue, .css等 打包为JS

### plugins

`plugins`(插件提供让webpack可以执行更广的任务),从打包优化和压缩,一直到重新定义环境中的变量等。

##  安装

+  全局安装
```
npm install --global webpack
```
> 不推荐全局安装, 这回使项目中的webpack锁定到固定的版本, 在使用不同版本的项目中, 可能会导致构建失败。

+  本地安装

```
npm install --save-dev webpack  -> 安装最新版本
npm install --save-dev webpack@<version>  -> 安装特定版本
```
如果使用的是`webpack v4` 或者是更高的版本, 则还需要状webpack-cli
```
npm install --save-dev webpack-cli
``` 

##  步骤

1. 新建文件夹, 文件夹的名称不能为 `webpack`

2. 在文件夹中运行 `npm init` 初始化一个`package.json`

3. 安装`webpack`和`webpack-cli`(v4及v4以上才有cli),`npm install webpack webpack-cli --save-dev`

4. 创建项目结构
```
webpack-demo
  -package.json
  -package-lock.json
  -index.html
  -src
    -index.js
```
src/index.js 中写入以下代码
```
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```
项目下的index.js
```
<!doctype html>
<html>
  <head>
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```
还需要调整`package.json`将删除`main`条目, 将包标记为'private'
package.json, + 表示添加, - 表示删除
```
  {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
+   "private": true,
-   "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {}
  }
``` 
5. 修改项目结构为
```
-webpack-demo
  -package.json
  -package-lock.json
  -dist
    -index.html
  -src 
    -index.js
```
6. 运行`npm install lodash --save`安装 lodash 
**dist/index.html代码如下**
```
  <!doctype html>
  <html>
   <head>
     <title>Getting Started</title>
-    <script src="https://unpkg.com/lodash@4.16.6"></script>
   </head>
   <body>
-    <script src="./src/index.js"></script>
+    <script src="main.js"></script>
   </body>
  </html>
```
**src/index.js代码如下**
```
+ import _ from 'lodash';
+
  function component() {
    const element = document.createElement('div');

-   // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
```
6. 配置web.config.js, 并构建如下代码
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
7. 配置package.json, `npm run build`命令生效
```
  {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
-      "test": "echo \"Error: no test specified\" && exit 1"
+      "test": "echo \"Error: no test specified\" && exit 1",
+      "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {
      "lodash": "^4.17.5"
    }
  }
```
**结论** :webpack 的基本结构就已经构建结束
```
webpack-demo
|- package.json
|- webpack.config.js
|- /dist
  |- main.js
  |- index.html
|- /src
  |- index.js
|- /node_modules
```
> 如果您使用的是npm 5，您可能还会package-lock.json在目录中看到一个文件。
> 也可以把名称修改为bundle.js 只需要,在webpack.config.js中, 把 output 下的filename修改为bundle.js

##  loader配置
###  识别css
安装 css-loader
###  识别图片
安装file-loader

##  输出管理
可以把打包文件打包成两个, (选择使用)
一个为app.js 入口文件
一个为print.js, 用于输出内容

##  插件

###  html-webpack-plugin 
自动同步dist/index.html模板, 如果修改了bundle文件的名称, 又不想每次都在index.html 中修改引入的bundle.js 文件的路径中的bundle 名称, 可以下载此插件

###  clean-webpack-plugin
在build前, 清除dist下的文件夹, 因此只会生成需要的文件夹, 不会保留上次构建留下的文件夹

###  devtool

打包之后, 报错都是在打包后的文件中提示, 这样很不利于调试,找错误, 因此我们可以使用devtool生成需要的`source-map`来解决这个问题, 运行打包之后的文件, 在开发模式中仍然可以, 在src下的js 文件中报错。
开发环境推荐:`eval-source-map`
生产环境推荐:`cheap-module-source-map` ,上线情况一般不存在错误了。

###  webpack-dev-server监听服务

每次修改之后都要执行一次打包命名很麻烦, 因此我们可以使用监听服务, 来监听build文件的变动

丁老师推荐: webpack-dev-server , 配置之后可以通过 `npm start` 监听build文件的变动

###  热替换模块(HMR)

和上述webpack-dev-server的功能类似, 但是效率更高,无须完全刷新。

###  tree shaking

移除js上下文中未引用的代码,也就是无效代码,比如: 你定义了一个方法, 但在整个程序中都未调用那么这个方法就是未引用的方法(无效方法)
你可以将应用程序想象成是一颗树。绿色表示实际用到的 源代码 和 library ,是树上活的树叶, 灰色是无用的代码, 是秋天赏枯萎的树叶, 为了去除死去的树叶你可以摇动这棵树, 使它们落下。

###  生产环境构建 webpack-merge

一般的, 开发环境和生产环境的构建目标差别很大, 在开发环境中我们需要具有 实时重新加载 或 热替换模块 能力的 source map 和 localhost serve 。而在生产环境中, 我们的目标是更小的bundle, 更轻量级的 source map ,以及更优化的资源, 以改善加载时间。因此我们需要编写独立的webpack配置

安装 `npm install --save-dev webpack-merge` 

把webpack.config.js 分成三部分 webpack.common.js, webpack.dev.js, webpack.prod.js 为了不进行重复的配置, 要把 dev 和 prod 中共同的配置提取到 common 中, merge 会帮助我们把 通用合并到这两个配置中去。
 
###  代码分离> 防止重复

CommonChunkPlugin 插件可以将公共依赖模块(src下有多个功能的入口文件时)提取到一个单独的模块中,避免两个模块中都打包了该模块, 导致体积变大

###  动态导入

在配置路由的时候 component 使用 import 的方式把 组件打到注释的 chunk 中

###  缓存> 输出文件的文件名

在浏览器中打开后会缓存该文件, 如果该文件更改了文件内容, 但没有更改文件名字, 那么该文件不会 重新加载改动后的文件。
因此我们可以在输出文件的文件名中配置 `contenthash`, 只要内容发生了变化就会生成一个新的哈希, 因此可以解决缓存问题。
###  缓存>提取模板

有些文件是不需要改变的, 因为给他们打一个哈希值每次都重新加载, 显的不太合适。因此可以使用提取模板的方式, 使他们的哈希, 不会因为改变内容而改变。




