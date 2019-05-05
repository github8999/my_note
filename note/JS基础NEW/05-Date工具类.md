#  Date对象

用于获取年月日时分秒

##  声明语法
var date = new Date(); 输出date是一串时间`test.html:8 Fri May 03 2019 11:18:16 GMT+0800 (中国标准时间)`

+  创建一个指定的事件对象
```
new Date('2019/1/1 0:0:0')  -> 2019/1/1 0:0:0
// 2019可以省略为19, 年份可以也放在最后面, 如果不写时分秒默认为0:0:0, 时分秒也可以放在前面
```

##  Date常用的方法

1. date.getFullYear() 获取年

2. date.getMonth() 获取月

3. date.getDate() 获取日

4. date.getDay() 获取周几

5. date.getHours() 获取时

6. date.getMinutes() 获取分

7. date.getSeconds() 获取秒

8. date.getYear() 获取年份, 已过时

    - 这个属性在2000之前都是以后两位表示, 例如1999 年为99 , 两千年则为100

9. date.getTime() 获取当前date对象对应的时间戳

    - 时间戳的起始时间为格林威治标准时间,1970年1月1月 0时0分0秒到当前日期所花费的毫秒数(北京时间 = GMT(格林威治时间)+8)

10. Date.now() 打印当前时刻的时间戳

> 闰秒