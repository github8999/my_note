+   bootstrap
    ```
        - 如果要兼容ie8及以下,需要引入respond.js才能实现对媒体查询的支持;

        - 如果需要根据需求自定义,可以修改less文件;
    ```

+   ie浏览器兼容模式
    ```
        - 让ie浏览器运行最新的渲染模式
        <meta http-equiv="X-UA-Compatible" content="IE=edge(edge可以写成IE8IE9,edge指最新的版本)">

        - 国产浏览器的高速模式:国产浏览器一般是两个内核一般是ie内核和webkit内核,国产一般默认使用的是兼容模式(ie内核)
        <meta name="renderer" content="webkit"> 目前只有360支持此标签
    ```

+   bootstrap栅格系统和布局容器:
    ``` 
        1. bootstrap 提供了一套响应式,移动设备优先的流式栅格系统,随着屏幕或视口尺寸的增加,系统会自动分为最多12列(可以自己修改,默认是12列,放置栅格从左到右从上到下,当前行放不下去会换行显示).

        2. container
            w>1200 : width1170  lg
            w992~1200 w:970  md
            w768~992 w:750  sm
            w<768   w:100%;  xs

        3. container-fluid  该容器的宽度是百分之百; 
        
        - 两个容器不能互相嵌套


        4. 先添加容器,在容器里面写row,在row中添加子元素,注意向上覆盖,向下兼容;

        5. 注意: 这些标签中会有默认的padding和margin;

    ```

+   栅格系统的其他样式说明
    ```
        - col-xs-offset 通过margin实现
        
        - col-xs-pull/push 通过定位实现
        
        - 列嵌套
            如果在col里面嵌套row,row的宽度是基于col
        
            如果col里面嵌套container,container是固定宽度不基于col

        - 隐藏 hidden-xs ,
    ```

+   什么是媒体查询
    ```
        - 媒体查询是查询当前设备的宽度和高度等信息,针对不同宽度和高度设置不同的样式,以便适配不同设备;
    ``

+   语法
    ```
        - @media screen(要查询的媒体类型) and|not|only (and前后要加空格)(max-width:992px(条件屏幕最小为992px)),可省略成@media (min-width: 992px)

        - 判断值的区间

            1. 向上兼容: 后面的没有设置就会使用默认的,更小的样式会传递到更大的没有设置的样式;

            2. 向下覆盖: 后面的会覆盖前面的
            
            - 如果是判断min-width,就从小到大判断;

            - 如果时判断max-width,就从大到小判断;
    ```

+   媒体查询补充:
    ```
        - 媒体查询引入样式文件,如果不符合条件就不引入;
        <link not(不是这个范围)/only(只在这个范围) media="screen and (min-width:992px) and max-width(1200px)" href="style.css">
        
        - min-device-width 和 min-width区别
        
        前者是设备最小宽度(改变浏览器窗口不会变化), 最小宽度
    ```

+   建议布局区间:
    ```
        超小屏幕    ( 移动设备 )  w<768px

        小屏设备    768px-992px  768<=w<992

        中等屏幕    992px-1200px 992<=w<1200

        宽屏设备    1200px以上    w>=1200

    ```
+   常见的响应式框架
    ```
        bootstrap 

        amaze ui 

        framework 针对ios (不是使用ios的控件实现而是使用h5)

        layui

    ```
