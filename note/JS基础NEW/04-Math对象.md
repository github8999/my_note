#  Math对象

Math是一个工具类, 封装了数学运算相关的方法和属性

##  常用方法

1. Math.ceil() 向上取整(天花板函数), 会往大了取
```
Math.ceil(1.1)  -> 结果为2 
Math.ceil(-1.1)  -> 结果为-1
```

2. Math.floor() 向下取整(地板函数)

3. Math.max() 求多个数中的最大值

4. Math.min() 求多个数中的最小值

5. Math.random() 返回[0,1)区间的随机数

    - 任意区间随机数公式: Math.floor(Math.random*(y-x))+x

6. Math.pow(x,y) 求x的y次方

7. Math.abs(x) 求x的绝对值

8. Math.round() 求四舍五入, 当小数位精度不够时, 会有一点偏差, 不建议使用

9. Math.sqrt(x) 求x的开方

10. Math.PI 圆周率

... 