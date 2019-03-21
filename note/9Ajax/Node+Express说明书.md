+   什么是Nodejs
    ```
        - Nodejs 是一个基于chromeV8 引擎的JavaScript运行环境;

        - Nodejs 使用了一个事件驱动,非阻塞式I/O的模型,使其轻量又高效;

        - Nodejs的包管理器 npm(node package manager) ,是全球最大的开源库生态系统;
    ```

+   Node.js与Express

    ```
        - Express基于node平台,是一个快速,开放,极简的web开发框架;
        
        - 根据链接创建express 项目  http://www.expressjs.com.cn/starter/generator.html
    ```

+   Node.js和Express使用方法

    ```
        1. 安装node.js
        
        2. Express是node.js的一个框架

        3. 全局安装express生成器 
            npm install express-generator -g
        
        4. 在当前目录下创建一个项目文件夹,也可以手动创建
            mkdir myapp
        
        5. 进入项目文件夹,在myapp文件夹执行express -e, 修改配置是express支持ejs模板,默认支持jade;
            express -e
        
        6. 在项目文件夹下执行命令安装package.json中配置的依赖库
            npm install

        7. 开启服务
            npm start
        
        8. 开启服务之后通过浏览器访问localhost:3000 可以看到首页内容,通过index.ejs可以修改首页内容;
    ```

+   Node中常用的方法
    ```
        - require ,nodejs引入模块的方法; 特定的模块有特定的功能
        
            1. fs 文件读写模块, var fs = require('fs');

            2. url url解析模块, var url = require('url');
        
        - 创建一个服务器
            http.createServer(function(request,response){

            }).listen(8090,function(){ // 服务器监听的端口号为8090

            });

        - 解析请求对象,包括文件名

            - var pathname = url.parse(request.url).pathname;  // 获取请求路径中的pathname(根路径之后的路径); 

    ```

+   路由形成的原理
    ```
        - 路由形成的原理:
        
            var filename= "index"; // 请求路径默认为index  
        
            if(pathname!='/'){
            
                // 如果pathname 不等于/,就让请求路径等于当前的请求路径 /news ->news
                filename = pathname.substr(1);
            }
            
            // 对当前路径的文件进行读取
            fs.readFile(filename+'.html',function(err,data){ // 读取路径下对应的.html文件
            
                // data属性是当前路径文件中的所有内容,例如html中的所有内容
                var rs = data.toString();

                // 模板引擎的原理:****************************************************
                // 把读取到的data通过replace把页面中的<%= xx %>的这种内容替换成你想要的内容
                
                rs = rs.replace(/<%=\w[.]+\w%>/g,function($1){ // $1是当前匹配到的内容
                
                var key = $1.replace(/<%=\w|\w%>/g,''); // 把<>中间的xx部分拿出来

                return 返回你想要的值
                })
                
                // 响应回该网页
                response.write(rs);
                response.end();
            })
    ```

+   添加路由
    ```
        1. Express框架中在项目的下app.js中设置了路由,默认匹配到routes下的index.js,在index.js中通过路由设置跳转到的路径或操作;

        2. 在 app.js 中设置路由:

            var ajaxTestRouter = require('./routes/ajaxTest');
            
            // 追加一个新的路由 用于拦截 /ajaxTest/xxx
            app.use('/ajaxTest', ajaxTestRouter);
        
    ```
    
+   匹配拦截请求路径
    ```
        var router = express.Router();

        router.get('/succ', function(req, res, next) { // 匹配get方式请求/succ路径

            res.render('succ.ejs',{xxx:value}); // 渲染succ.ejs页面,第二个参数是替换模板引擎中<%= xxx %>,如果不设置就不要写ejs中也不要写;

        });
        
        router.post('/succ', function(req, res, next) {});   
    ```

