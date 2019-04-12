##  路由起步结构

> 当引入 vue-router 包之后, 在window中, 就有了一个构造函数, 此时在打开网页时,路径后就会加一个#/ (#/被称作 哈希)

> 以 login组件 和 register组件 为例

> 通过注入路由, 我们可以在任何组件内通过  访问路由器, 也可以通过 this.$routes 访问路由。同一个 Vue实例中, $route 和 $router 是整个 #app 和组件中 共有的;

>**注意** 如果路由匹配成功,将自动设置class="router-link-active"属性值 

**HTML部分:**

```
    <!-- 使用vue-router 提供的标签 router-link 组件进行导航 -->
    <!-- 'to' 属性指向链接 -->
    <!-- router-link 默认会解析成 a 标签, 可以使用 `tag` 属性解析成你想要的标签 -->
    <router-link to="/login" tag="span">登录</router-link>
    <router-link to="/register">注册</router-link>

    <!-- 路由出口, 占位符, 将路由匹配到的组件展示在这里 -->
    <router-view></router-view>
```
**JS部分:**

> **注意** 如果使用模块化机制编程, 导入Vue 和VueRouter, 要调用 Vue.use(VueRouter)
```
    // 1. 创建组件模板
    var login = {
        template:'<div><h2>这是登陆组件</h2></div>'
    }
    var register = {
        template:'<div><h2>这是注册组件</h2></div>'
    }

    // 2. 创建路由对象
    var router = new VueRouter({
        routes:[
            {
                path:'/login',
                component:login
            },{
                path:'/register',
                component:register
            }
        ]
    })

    // 3. 把路由对象 注入/挂载 到vue实例中, 从而让整个应用都有路由功能
    var vm = new Vue({
        el:'#app',
        router
    })
```