+   什么是less
    ```
        - less是css预处理脚本,是一个动态的样式表语言;
        - 语言一般可以定义变量函数等;
        - 比css更强大,高效
        - 基于node
    ```
+   注释:
    ```
        /**/ 这种注释会被编译到css文件中
        // 这种只会在less文件中显示,不会编译到css文件中
    ```
+   变量
    ```
        @变量名:值;
        a{
            color:@变量名;
        }
    ```
+   混入: 可以将已经定义好的样式,引入到样式中
    ``` 
        .addRadius{ //也可以传一个参数
        .addRadius(@r(如果引入时不传参数会报错)
        .addRadius(@r:10px(如果不传参数默认为10px))
            border-radius:@r;
            -webkit-border-radius:@r;
            -moz-border-radius:@r;
        }
        div{
            width:200px;
            height:200px;
            // 引入已经写好的css样式
            .addRadius;
        }

    ```
+   嵌套:
    ```
        .container{
            width:100%;
            <!-- 后代子元素 -->
            div{
                width:100%;                                               
            }
            <!-- 直接子元素 -->
            >a{}
            <!-- 伪类,伪元素 -->
            &:hover{}
            &::before{}

        }
        -->
        .container{
            width:100%;
        }
        .container div{
                width:100%;                          
        }
    ```
+   less环境搭建:
    ```
        安装node.js 
        打开控制台 执行npm install -g less
    ```