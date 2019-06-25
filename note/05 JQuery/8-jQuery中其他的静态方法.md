+   $.trim()
    - 作用:去除字符串两边的空格;

    - 参数:需要去除两端空格的字符串;

    - 返回值: 去除空格之后的字符串;

+   isWindow()
    - 作用:判断传入的对象是否是window对象;

    - 返回值:布尔值;
+   isArray()
    - 作用:判断传入的对象是不是Array类型;

    - 返回值:布尔值;

+   isFunction()
    - 作用:判断传入的对象是不是一个函数对象;

    - 返回值:布尔值;

    - 注意: 
        $.isFunction(jQuery) -->true
        // jQuery的本质是一个函数,jQuery对象的本质是一个伪数组;

+   holdReady(true/false);

ready入口函数是在dom元素被加载完毕之后就执行, 此时dom元素中引入的媒体文件不一定加载完成, 此时就可以使用 holdReady 来等待某个资源加载完毕再执行

    - true是暂停执行ready入口函数;
    
    - false是继续执行ready入口函数;




