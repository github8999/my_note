#   Vue组件
##  目录
<a href="#1">1 插槽</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="#1-1">1-1 编译作用域</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="#1-2">1-2 vue后备插槽</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="#1-3">1-3 vue具名插槽</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="#1-4">1-4 vue作用域插槽</a><br>
<a href="#2">2 处理边界情况</a><br>
<a href="#3">3 缓动/动画</a><br>
<a href="#4">4 混入</a><br>
<a href="#5">5 自定义指令</a><br>
<a href="#6">6 过滤器</a><br>

##  <span id="1">1 vue插槽</span>
>在组件标签中的内容, 被称为组件插槽。

>如果组件模板中没有 定义 `<slot></slot>` 那么组件标签中间的内容都会被抛弃，`<slot>` 是一个占位符。 

>插槽中的内容可以是文本, 标签, 甚至是组件。
```
    <my-com>
    插槽内容: 可以是文本, 标签, 甚至是组件
    </my-com>

```

### <span id="1-1">1-1 编译作用域</span>
>插槽作用域：可以简单的理解为,在哪个写就在谁的作用域内。

>**作为一条规则，请记住：** 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
```
    <!-- 此处是在#app的作用域内 -->
    <my-com>{{msg}}</my-com>

    ----
    <script>

        var myCom = {

            // 此处的msg是在myCom组件的作用域中
            template:'<div>这是myCom组件<slot>{{msg}}</slot></div>'
        }

        var vm = new Vue({
            el:'#app',
            data:{
                msg:'这是#app的msg'
            },
            components:{
                myCom
            }

        });

    </script>
```
### <span id="1-2">1-2 vue后备插槽</span>
> 插槽 可以有默认值, 称为后备插槽, 当组件标签中没有内容的时候, 我们可以在模组件板中的 `<slot></slot>` 的中间设置默认值。

> **注意:** 由于编译作用域的关系，后被插槽是无法直接引用同级组件作为后备内容的。
```
    <my-com></my-com>
    
    <template id="tmpl">
        <div>
            <p>这是myCom组件</p>
            <slot>这是默认值</slot>  <!-- 默认值 -->
            
        </div>        
    </template>
```
### <span id="1-3">1-3 vue具名插槽</span>
> 在使用集成框架的时候见的比较多，具名插槽出现的需求是 一个组件的内容`<slot>`部分 如何实现同时插入多个`<slot>`
```
    <!-- 
        没有v-slot指令的指默认为default,
        无论怎么打乱布局，都只会按照模板对象中 <slot> 的位置进行排版。 
     -->
    <my-com>
        <template v-slot:header>
            <h2>这是header部分</h2>
        </template>
        <p> default </p>
        <template v-slot:footer>
            <h2>这是footer部分</h2>
        </template>
        <p> default </p>
        <p> default </p>
    </my-com>


    <template id="tmpl">
        <div>
            <p>这是myCom组件</p>
            <slot name="header"></slot>
            <slot></slot>  <!-- 对于没有name的 slot 会有一个隐式的名字: default -->
            <slot name="footer"></slot>
        </div>
    </template>
```
### <span id="1-4">1-4 vue作用域插槽</span>
>作用域插槽可以让插槽内容，访问到子组件中的数据。这在有些时候是比较有用的

例：父级作用域要访问 子组件 `<current-user>` 中的 user 数据。 首先要现在子组件的 `<slot>` 将该数据作为属性绑定到自身。
```
    <current-user>

        <!-- 包含所有插槽 prop 的对象命名为 slotProps，
             如果喜欢可以自己命名成喜欢的名字 -->
        <template v-slot:default="propSlot"> 
            {{propSlot.user}}
        </template>
    </current-user>
    
    <template id="current-user">

        <!-- 绑定在 <slot> 元素上的特性被称为插槽 prop -->
        <slot :user"user"></slot>
    </template>
```
---
## <span id="2">2 处理边界情况</span>
> 在绝大多数情况下，我们最好不要触达另一个组件实例内部或手动操作 DOM 元素。不过也确实在一些情况下做这些事情是合适的。

1. 访问根实例

    在每个 new Vue 实例的子组件中，其根实例可以通过 `$root` 属性进行访问。例如，在这个根实例中：
    ```
    // Vue 根实例
    new Vue({
        data: {
            foo: 1
        },
        computed: {
            bar: function () { /* ... */ }
        },
        methods: {
            baz: function () { /* ... */ }
        }
    })
    ```
    所有的子组件都可以将这个实例作为一个全局 store 来访问或使用。
    ```
    data(){
        return{};
    },
    methods:{
        test(){ // 子组件中的方法

            // 获取根组件的数据
            this.$root.foo

            // 写入根组件的数据
            this.$root.foo = 2

            // 访问根组件的计算属性
            this.$root.bar

            // 调用根组件的方法
            this.$root.baz()
        }
    }

    ```
2. 访问父级组件实例

    访问父级组件实例通过 `$parent` 来获取组件实例
    ```
    test(){ // 子组件中的方法

        // 获取父级组件对象
        this.$parent
    }
    ```
3. 访问 子元素 和 子组件

    在组件标签 和 html标签 中添加 `ref` 属性。 
    ```
    <my-com ref="myCom"><my-com>
    <p name="name"></p>
    ```
    在根组件中, 通过 `$refs` 获取 子组件 和 子元素。
    ```
    this.$refs.myCom 
    ```
    **注意1:** 当 `ref` 和 `v-for` 一起使用的时候，你得到的引用将会是一个包含了对应数据源的这些子组件的数组。
    
    **注意2:** `$refs` 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 `$refs`。
---
## <span id="3">3 过渡/动画</span>
>掌握两组class

在`v-leave-active`，`v-enter-active`中添加 `transition`，给`v-leave-to`，`v-enter` 添加如何移动。
```
.v-leave-active,.v-enter-active{
    transition: all .4s ease;
}

.v-leave-to,.v-enter{
    opacity:0
}
```
---
## <span id="4">4 混入</span>
>可以把局部的代码块组装到某个组件内部使用，vue会把 混入 中的 相同的属性 和 当前对象 合并。

>混入中的数据在和组件的数据发生冲突时以组件数据优先。
```
var mixin = {
    methods:{
        foo(){
            console.log('mixin的foo方法')
        }
    }
}

new Vue(){
    mixins:[mixin]  ==> 这时,vue实例就包含了foo方法
}
```
---

## <span id="5">5 自定义指令</span>
>当你不得不进行dom操作的时候,就需要使用自定义指令

> 除了 el 之外，其它参数都应该是只读的，切勿进行修改。
+   参数1：el，绑定该指令的对象。 

+   参数2：binding，一个对象包含以下参数

    - value：指令绑定的值，例：`v-focus="value"`

    - modifiers：一个包含修饰符的对象，例：`v-focus.name.age`中,修饰符对象为：`{name:true, age:true}`

全局指令，以 v-focus 为例： `Vue.directive('focus',function(el){})`

局部指令，以 v-focus 为例：
```
directives:{
    focus(el){}
}
```
---
## <span id="6">6 过滤器</span>

1. **过滤器基本使用:** 
>过滤器一般用于 mustache插值 和 v-bind表达式 的过滤;

>可以调用多个过滤器, 第二个过滤器会处理第一个过滤后的结果, 调用时加不加括号都可以;

基本使用: 

+ 步骤1: 在 mustache插值 和 v-bind表达式 中,以管道符 | 调用过滤器
    ```
    <p>{{ msg | msgFilter('替换的内容') | morefilter }</p>
    ```
+ 步骤2: 定义过滤器

    **全局过滤器:**
    ``` 
    // filter 第一个参数是 管道符 后的过滤器名称 ,第二个参数是一个回调函数
    // 回调函数第一个参数是要过滤的数据,后面跟的是自定义参数
    Vue.filter('msgFilter'',function(msg,args){

    }) 
    ```

    **局部过滤器**
    ```
        new Vue({
            filters:{ //局部过滤器
                过滤器名称:function(msg){
                    return msg+'content';
                }
            }
        });
    ```
