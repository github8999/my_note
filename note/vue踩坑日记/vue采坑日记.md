# vue踩坑日记

+  关于 `router-link` 绑定事件不生效问题

因为 `router-link` 是自定义标签，根本就没有事件和方法，所以不触发，加个 `native` 就是告诉 vue 这个标签现在有主了 它是H5标签 可以加事件了。
```javaScript
<router-link @click.native ="click" ></router-link>
```
+  `Uncaught SyntaxError: Invalid shorthand property initializer`

设置的值无效, 可能是 `:` 写成了 `=` 



