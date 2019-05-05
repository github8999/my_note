#  window对象

window对象是BOM的核心, window对象指当前的浏览器窗口

##  计时器

+  计时器类型

  - 一次性计时器: 指定的延时时间后执行代码只执行一次
    1. setTimeout()

    2. clearTimeout()
    
  - 间隔性计时器: 每隔固定时间间隔之后执行

    1. setInterval()

    2. setInterval()

> 返回值是一个可以传递给clearxxx()从而取消计时器周期性执行的值

## 历史记录History

+  语法: window.history.属性|方法

+  属性: length 返回当前窗口的历史记录长度

+  方法: 

    1. back()  返回列表中前一个url 

    2. forword()  返回列表中下一个url 

    3. go()  返回列表中的某个具体的页面