
##  Ajax( Asynchronize JavaScript and XML ,异步javaScript和XML) 
---

+   什么是Ajax
    ```
        - Ajax是在不加载整个页面的情况下与服务器交换数据并更新部分页面的技术;

        - 早期使用XML的较多现在一般使用JSON所以Ajax已经体现不出XML的特征了;
    ```

+   Ajax可以做什么(了解)
    ```
        - 显示新的html内容而不用载入整个页面,每次请求的时候不加载整个页面,只加载一部分或一些数据;

        - 提交一个表单并且立即显示结果

        - 登录不用跳转到新的页面

        - 遍历数据库加载更多而不用刷新页面
        ...
    ```

+   Ajax的正确打开方式
    ```
        1. 使用逻辑

            - 在ejs页面中通过Ajax请求数据并接收响应的结果
            - 在routes下的js文件(后端文件)中拦截提交的路径并响应需要的数据到ejs页面中;

        - get请求 :
            
            // 1. 创建XMLHttpRequest实例对象
            var xhr = new XMLHttpRequest();

            // 2. 设置请求方式
            xhr.open('get','/test?key=value&key=value',true(是否异步));

            // 3. 发送请求 
            xhr.send();

            // 4. 监听状态
            xhr.onreadystatechange = function(){
                
                // xhr.readyState == 4  发送成功 等待结果
		    	// xhr.status == 200  请求成功 返回结果
                // 判断请求是否成功
                if(xhr.readyState == 4 &&  xhr.status == 200){

                    // 获取响应数据,返回的是字符串
                    var rs = xhr.responseText; 
                }

            }

        - post请求:
            1. 创建XMLHttpRequest实例对象
            var xhr = new XMLHttpRequest();

            2. 设置请求方式
            xhr.open('post','url');

            3. 设置请求头
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

            4. 发送请求,请求参数写在send中,参数为字符串类型,可传一个JSON字符串
            xhr.send(str); 

            5. 监听状态
            xhr.onreadystatechange = function(){

                // xhr.readyState == 4 发送成功 等待结果, xhr.status == 200 请求成功 返回结果
                
                // 当请求和发送成功的时候,获取响应回来的内容
                if(xhr.readyState == 4 && xhr.status == 200){
                
                    // 获取响应内容
                    var rs = xhr.responseText;
                }
            };  

    ```

+   get请求个post请求的区别
    ```
        1. post相对安全(post请求参数不会作为url的一部分,post不会保存到浏览器浏览记录中,post不会被写入服务器日志,post不会被缓存);

        2. post发送数据大小没有限制,get发送数据的大小受url长度的限制;

        3. post可以发送更多的数据类型;

        4. post请求比get慢;

        5. post一般用来写入或修改数据,get一般用来搜索,排序和筛选之类的操作(例:淘宝和支付宝的搜索查询),目的是资源的获取,读取数据;

    ```

+   Ajax的封装
    ```
        
    ```




    











+   客户端与服务器

+   通信协议

+   网络,IP地址,端口,域名

+   静态网站,动态网站

+   动态网站技术php常用语法

+   同步与异步

+   ajax实现动态请求效果


