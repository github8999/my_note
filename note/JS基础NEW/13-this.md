#  this指针

解析器在调用函数时, 每次都会响函数内部传递一个隐式的参数this

1. this指向调用者

2. 如果是通过new调用的函数, this指向该实例对象

##  call 和 apply 

1. 这两个方法都是函数对象的方法, 需要通过函数对象调用

2. 函数对象调用时的第一个参数, 可以用来指定函数中的this
```
fun.call(obj) --> 此时fun 会执行, 且函数中的 this 指向 obj
```

3. call 和 apply 的用法相似, 区别是 `call` 中从第二个参数开始一次传递函数中的实参, 而 apply 传递的是实参数组

## arguments 参数列表(实参列表)

1. 在调用函数时候, 浏览器除了传递this以外还会传递一个隐式的arguments对象

2. arguments 是一个伪数组对象, 可以向数组一样使用

3. 实参会保存到arguments中, 即使定义的形参以外的参数也会保存在arguments中

4. arguments 中的 callee 属性表示当前的函数对象

5. arguments可以用来传递不定数量的参数