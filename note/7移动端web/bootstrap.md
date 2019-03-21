+   源码文件 可以根据我们的需要进行自定义,修改less文件然后编译生成js文件

+   ie8及以下需要引入respond.js才能实现对媒体查询的支持

+   ie兼容模式
    ```
        让ie浏览器运行最新的渲染模式
        <meta http-equiv="X-UA-Compatible" content="IE=edge(edge可以写成IE8IE9,edge指最新的版本)">

        - 国产浏览器的高速模式:国产浏览器一般是两个内核一般是ie内核和webkit内核,国产一般默认使用的是兼容模式(ie内核)
        <meta name="renderer" content="webkit"> 目前只有360支持此标签
    ```
+   bootstrap使用方式

    ```

    ```
+   布局容器:
    ```
        1. container
            w>1200 : width1170  lg
            w992~1200 w:970  md
            w768~992 w:750  sm
            w<768   w:100%;  xs
        2. container-fluid  
        它们两个不能嵌套
    ```

+   栅格系统
    ```
        bootstrap 提供了一套响应式,移动设备优先的流式栅格系统,随着屏幕或视口尺寸的增加,系统会自动分为最多12列(可以自己修改,默认是12列,放置栅格从左到右从上到下,当前行放不下去会换行显示).
        1. 先添加容器,在容器里面写row,在row中添加子元素,注意向上覆盖,向下兼容

    ```
+   栅格系统的其他样式说明
    ```
        col-xs-offset 通过margin实现
        col-xs-pull/push 通过定位实现
        
        列嵌套
        如果在col里面嵌套row,row的宽度是基于col
        如果col里面嵌套container,container是固定宽度不基于col

        隐藏 hidden-xs ,


    ```
