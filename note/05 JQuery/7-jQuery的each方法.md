##  $.each() 和 forEach()的区别

1. `forEach`方法是数组的方法, 只能直接用来遍历数组

2. `$.each()` 可以用来遍历数组和伪数组

3. forEach与each中 回调函数的参数顺序相反
```
var arr = [1,2,3,4];

arr.forEach(function(value, index){ ... })

$.each(function(index, value){ ... })
```
##  原生的 map方法 与 $.map方法区别

> 两者的区别类似于 `forEach` 与 `each`

##  map与forEach的区别

map 和 forEach 用于遍历数组, 但是forEach仅用来遍历数组, 返回值为undefined; 而map遍历数组的同时, 可以自定义数组的每个元素。

> each与forEach相同, 但是不会返回 undefined 而是原数组
