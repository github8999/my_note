+   jQuery入口函数常见的几种格式:
    ```
        1. $(window).load(function(){ ... });

        2. $(function(){ ... });

        3. jQuery(function(){ ... });

        4. $(document).ready(function(){ ... });

        - 写法的区别: 
            
            a) 写法1和js原生的window.onload的功能相同,指页面所有的DOM元素加载完毕,图片也加载完毕才执行; 

            b) 写法2,3,4是指页面所有的DOM元素加载完毕,但不会等到图片(可能是指通过src引入的文件)加载完毕就执行;

    ```
##  jquery入口函数常见的几种格式: 

1. $(window).load(function(){ ... }) ==> window.onload = func;

2. `$(document).ready(function(){ ... })` ==> 可以简写为`jQuery/$(function(){ ... })`

###  二者区别： 

看二者的区别之间首先要先了解一下**DOM文档的加载过程**

1. 解析HTML结构。

2. 加载外部脚本和样式表文件。

3. 解析并执行脚本代码。

4. 构造HTML DOM模型。(绘制dom树)//ready

5. 加载图片等外部文件。

6.  页面加载完毕。//load
> **注意** 加载过程不太正确, 用于帮助理解两个入口函数的区别

1. `$(window).load(function(){ ... })` 指页面所有的dom元素都加载完毕, 图片等媒体资源(引入资源)也加载完毕才执行。

2. `$(document).ready(function(){ ... })` 指页面元素加载完毕, 不会等媒体资源加载完毕就执行

3. `$(window).load(function(){ ... })`, 一个页面中只能出现一次, 多个`window.load` 会被覆盖, `$(document).ready(function(){ ... })` 可以在同一个页面中出现多个

##  jQuery命名冲突问题

在实际开发过程中, 会有很多人同时开发同一个项目, 可能会有人引入的JS文件中使用了`$`符号作为变量标识符, 这样就会导致jQuery出问题, 为了解决该问题, 可以修改`jQuery顶级对象`的`标识符`

1. jQuery.onConflict(), 释放`$`的使用权, 释放之后就不能再通过`$`代替jQuery顶级对象

2. 自定义访问符号: `var $jQ = jQuery.onConflict()`

> **注意:** 该操作需要在jQuery代码执行的之前执行