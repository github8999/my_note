#  Vuex

`Vuex` 是一个专门为 `vue.js` 应用程序开发的 `状态管理模式`, 状态可以理解为数据, `Vuex` 可以把一些共享的数据, 集中起来提供 Store挂载的Vue实例的每个模块使用, 可以理解为是 **对应的Vue实例的一个共享仓库** 。
 
##  什么时候使用vuex

1. 组件组件之间需要通信, 建议放在vuex。

2. 需要跨多级组件通信, 建议放在vuex。

3. 需要持久化的数据( 如登录后的用户信息 ), 建议放在vuex。

4. 和业务强相关的数据, 可以放在组件内。

##  vuex使用步骤

1. 在项目下运行 `npm install vuex --save`

2. 在main.js 下导入
```
import Vue from 'vue'  --> 注意 'vue' 是小写
import Vuex from 'vuex'  --> 注意小写
```

3. 在一个模块化的项目中需要, 把vuex注册到项目中 `Vue.use(Vuex)`

4. 创建vuex实例
```
const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {}
})
```
> 把 store 挂载到 Vue实例上, 整个实例中的组件都可以获取到store中的数据。
###  modules模块化

为了避免, store中的数据过于集中从而变得不利于维护, 因此可以store分割成模块。每个模块拥有自己的state, mutations, actions, getters, 甚至嵌套子模块(modules)。

> 模块化时, 需要把子模块挂载到`store`中
```
new Vuex.Store({
    modules:{
        moduleA,
        moduleB
    }
})
```

> 模块中通过 `namespaced: true` 开启命名空间(模块的命名空间为, 在modules中注册进去的key值: 上述中的moduleA)。如果子模块中没有命名空间, 会继承父模块的命名空间。

###  state 

用来读取`store`实例中的数据, 虽然直接修改`state`中的数据不会报错, 但是不建议直接修改, 不利于维护。

如果在某一个组件中直接通过`state` 错误的修改了数据, 通过state不容易查找到出错的源组件。

###  mutations

**作用:** 修改`state`中的值, 要通过`mutation` 修改(`mutation` 指的是 定义在`mutations`中的方法)。 

既然`vuex` 中的状态是响应式的, 那么我们变更状态时, 见识状态的vue组件也会自动更新。 **因此`mutations`也要向使用`vue`一样遵守响应规则:**

1. 最好提前在`store`中初始化好所有需要的属性

2. 当对象上添加新属性时, 你应该使用Vue.set(obj ,'newProp', newVal), 或者以新对象替换老对象

> `mutation` 必须是同步函数, 我们调试一个项目并观察`devtools`中mutation日志, 每一条`mutation`被记录, `devtools` 都需要捕捉到前一状态和后以状态的快照( 可以理解为每个`mutation`的执行结果 )。异步会让这一功能无法完成, 因为当`mutation`触发时, 回调函数还没有被调用。`devtools` 不知道什么时候回调函数实际被调用 --- 实质上任何在回调函数中进行的`state`改变都是没有办法追踪的。

###  getters

`getters` 可以看做是`store`的计算属性, getters 的返回值会根据它的依赖被缓存起来, 且只有当它的依赖发生了改变才会被重新计算。

> **注意:** getters如果作为方法访问的时候, 每次都会被调用, 不会被缓存
> **注意:** getters 会暴露为store的属性, 因此可以通过$store.getters来访问它

###  actions

actions 类似于mutations, 不同在于: action 一般用来调用 mutation 来修改state 而不是直接变更状态( 修改state )

actions 中可以包含任意的异步操作。

例如: 点击购物车商品加减的时候, 需要请求ajax中获取商品的库存等, 这时要修改state就要通过 action 请求数据 调用mutation 修改state

action 可以通过 store.dispatch('actionKey') 触发, action支持载荷形式进行触发。
```
store.dispatch('increment',{count:10})

store.dispatch({type:'increment',count:10})
```
##  参数总结

###  state

1. state 不是函数, 不需要传参

2. state 暴露为 store 的属性

###  mutations

mutation(state, payload(载荷))

1. state 是当前 module 中的 state

2. payload 如果是单个数据, 可以是一个基本数据类型, 如果是多个数据, 要作为对象或数组的形式传递

###  getters

1. 在根store上注册的getter接受以下参数, state, getters

2. 在模块上定义的getter可以接受四个参数state, getters, rootState, rootGetters

###  actions

1. action 的第一个参数是context和store内容相同但不是store, 也可以拆解为对象:{state, rootState, commit, dispatch, getters, rootGetters}

###  Vue.Store 实例方法

1. commit('moduleNamespaced/mutationKey', payload, options), 如果要触发其他模块的mutation, 可以在options中通过{root: true, 在store中触发}

2. dispatch('module/actionKey', payload, options), action 中的payload(载荷) 必须是一个对象, options 中可以是{root:true}
  
