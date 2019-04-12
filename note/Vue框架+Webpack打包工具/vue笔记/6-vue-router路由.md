#   路由vue-router

##  目录
<a href="#1">1 路由起步</a>
<a href="#2">2 路由起步</a>





---
##  嵌套路由
> 路由之间也可以有嵌套关系,例如: foo 为参数
```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```
+   children 属性, 设置子级路由的匹配规则
> **注意** / 开头匹配到的是根路径
```
const User = {
    template:'
    <div>
        <h2>这是user组件</h2>
        <router-link to="/login/foo/profile"> profile </router-link>
        <router-view><router-view>
    </div>'
} 
```

```
{
    path:'/user:method',
    component: User,
    children:[
        {path:'profile',
        component:'Profile'}
    ]
}
```

##  编程式的导航

除了使用 `<router-link>` 创建a标签来定义导航链接, 我们还可以借助router实例的方法,通过编写代码来实现

在Vue实例内部, 可以访问到 $router ,因此可以通过 this.$router.push 导航到不同的URL
```
    // 字符串
    router.push('/login')

    // 对象
    router.push({path:'/login'})

    // 命名的路由, 对应路由的name属性
    router.push({name:'login',params:{useId:'123'}})

    // 如果提供了path , params会被忽略, 但是query不会
    router.push({path:'/login',query:{userId:123})

    // 带有params参数应该写成如下形式
    router.push({path:'/login/userId'})
```
+   router.replace
> router.replace跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

+   router.go(n), 意思是历史记录前进后退多少步
```
router.go(1) // 前进一步

router.go(-2) // 后退两步
```

### 命名路由

有时候,通过名称来标识一个路由显的更方便一点, 可以通过路由匹配规则中添加 name 属性, 例: 
```
    {
        path:'/account/login',
        name:'login',
        component:login
    }
```
这和 router.push 通过 name 属性相似, to后面需要跟一个对象
```
    <router-link to="{name:'login',params:{UserId:123}}">
```

### 命名视图
> 有时候想要同一个路由展示多个组件,而不是嵌套展示
```
    // 如果路由出口没有设置name ,name默认为default
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
    <router-view></router-view>

    const router = VueRouter({
        routes:[
            {path:'/login',
            components:{    // 注意, 此时加了 s
                default: com1,
                a:com2,
                b:com3
            }}
        ]
    })
```