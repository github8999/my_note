#  JSON(JavaScript Object Notation, JS对象表示法)

> **JSON不兼容IE7**

+  为什么要有JSON

JS对象只有JS自己才认识, 其他语言都不认识。JSON就是一个特殊格式的字符串, 这个字符串可以被多种语言识别, 可以完成语言与语言之间的交互。转为任意语言中的对象, JSON 在开发中主要是交互数据, 例如: 前后端数据交互。

##  JSON对象

JSON对象的本质就是JS对象, 按照一定的书写规范, 在JSON对象和JSON对象字符串之间转换。

JSON分为 `JSON数组` 和 `JSON对象`, JSON对象可以理解为符合JSON规范的JS对象

+  JSON中允许的值: 

  - 字符串

  - 数值

  - null 

  - 对象

  - 数组

  > JSON对象中, 不能有函数对象, 且属性名要加引号

##  JSON 工具类

在JS中提供给了JSON 工具类, 可以使`JSON字符串`和`JSON对象`互相转换
1. parse(), 该方法可以将JSON字符串转为JSON对象

2. stringify(), 该方法可以将JSON对象转为JSON字符串

##  eval() 方法

这个函数可以用来执行一段字符串形式的代码, 并执行结果返回

```
var str = "alert('hello')"

eval(str)

==> 结果页面会弹出 hello
```
如果执行的字符串中含有`{}`, 会将`{}`当成代码块, 如果不希望将其当成代码块解析, 则需要在字符串前后加上`()`
```
eval('({
    id:'01',
    name:'lisa',
    age: 18
})')
``` 
> eval() 可以将`JSON字符串`转为`JSON对象`, 因为性能差, 具备安全隐患所以一般不建议使用。


