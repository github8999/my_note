+   兼容问题:
    ```
        - 在低版本的浏览器中,不兼容html5的新标签的,会把他们解析成行内块元素,这些我们通过给元素添加display:block就可以解决;

        - 而在IE8及以下不认识这些html5新标签,如何解决呢?

            a) 在js中通过创建节点的形式创建ie8及以下浏览器不认识的标签,但是这样多个标签,我们创建起来就比较麻烦;

            b) 引入js兼容文件 html5shiv.min.js,  通过条件注释引入
                <!--[if lte IE 8]> <script src="js/html5shiv.min.js"></script> <![ endif]-->
            
    ```