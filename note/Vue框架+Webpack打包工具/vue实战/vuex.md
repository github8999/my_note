#   Vuex

Vue是一个专门为 vue.js 应用程序开发的 状态管理模式, (状态可以理解为数据) ,它可以把一些共享的数据, 保存到vuex中, 方便整个程序中的任何组件直接获取或修改公共数据。

Vuex 是为了保存 组件之间共享数据而诞生的, 如果组件之间有要共享的数据, 可以直接挂载到Vuex中, 而不必通过父子之间传值了, 如果 组件的数据不需要共享, 此时,这些不需要共享的私有数据, 没有必要方到Vuex中。**只有要共享的数据,才需要放到vuex中**

Vuex是一个全局的共享数据存储区域,相当于一个共享仓库。

##  vuex 的安装

+   在当前项目下 运行命令: `npm install vuex --save`

+   在一个模块化的打包系统中, 需要显示地通过Vue.use() 来安装vuex：
```
// 在main.js下导入

import Vue form 'Vue'
import Vuex from 'Vuex'

// 把vuex注册到项目中
Vue.use(Vuex)

// 创建vuex实例

const store = new Vuex.Store({
    state:{ // 用来读取store中的实例, 虽然可以通过修改, 但是禁止直接在组件中修改, 不利于维护
            // 如果在组件中直接通过state修改数据, 如果是某一个组件中, 错误的修改了state中的数据, 不容易查找到出错的源组件等。

    },
    mutations:{ // 修改state中的值, 要通过 mutations 提供的方法修改, 
        // 自定义方法, 且方法中的第一个参数是state, 也可以向方法中传递额外的参数, 也称为mutations的载荷, 
        // 注意: mutations 中只能传递两个参数, 一个为state , 一个为mutations 的载荷, 如果要传递多个参数则载荷可为一个对象
        // mutations 需要遵守响应规则:
        // 既然Vuex 中的状态是响应式的, 那么我们变更状态的时, 监视状态的Vue组件也会自动更新。因为mutations 也要像使用Vue 一样遵守响应规则: 

        1. 最好提前在 store 中 初始化好所有需要的属性

        2. 当对象上添加新属性时, 你应该使用 Vue.set(obj,'newProp',123),或者以新对象替换老对象

        3. mutations 必须是同步函数, 我们调试一个项目并观察 devtools 中 mutation 日志, 每一条 mutation 被记录, devtools都需要捕捉到前一状态和后一状态的快照(可以理解为每个mutation的执行结果)。异步会让这一功能不可能完成, 因为当mutation 触发的时候, 回调函数还没有被调用。devtools不知道什么时候回调函数实际上会被调用--实质上任何在回调函数中进行的 state 改变都是没有办法追踪的。


 
    },
    getters: { // getters可以看做是store的计算属性, getters 的返回值 会根据它的依赖被缓存起来, 且只有当它的依赖发生了改变才会被重新计算。
               // getters 作为方法 访问时候, 每次都会调用, 不会缓存
              // getters 接受 state 作为 它的第一个参数, getters 也可以 接受其他getter 作为第二个参数
              // getters 会暴露为 store 的属性 , 因此可以通过$store.getters 访问它, getter 

    },
    actions: {
        // Action 类似于 Mutation , 不同在于:
        // Action 提交的是 Mutation, 而不是直接变更状态(state)
        // Action 可以包含任意的异步操作。
        // 例如: 点击购物车商品加减的时候, 需要请求ajax中获取 商品的库存等, 这时要修改state 就要通过 actions 请求数据 提交到 mutations 中 ,然后通过mutations 修改 state 
        // action 可以通过 store.dispatch('action名称') 触发 
        // action 支持同样的载荷形式进行触发, 

        1. store.dispatch('increment', {
            count:10
        } )

        2. store.dispatch({
            type:'increment',
            count:10
        })

        actions中的函数可以传递一个context对象{commit,dispacth, rootGetters, rootState, state } 和store内容一样但不是store对象, 也可以传递一个对象
        对象中包含{commit, // 调用mutations
                  // 不建议直接调用state, 因此没有state
        }


    }
})

// 把store挂载到Vue实例上, 整个实例中的组件都可以获取到store中的数据

```
mudules 

模块化的时候, 需要把子模块挂载到 store 中
模块中通过namespaced : true 开启命名空间,
如果子模块中没有命名空间, 会继承父模块的命名空间, 如果父子模块中有相同的方法, 会同时调用两个方法
new Vuex.Store({
    state:{},
    modules:{
        moduleA,
        moduleB
    }

})


参数总结
state:{ // 不是函数
}

mutations: {
    xx(state,载荷){ // mutation的 载荷只有一个, 单个属性可以是变量, 多个属性是一个对象

    }
}

actions: { // actions 的第一个参数是context 等同于 store 但不是store 也可以拆解为对象{ store中的属性... }
    getter 中的参数: 
        state,      // 等同于 `store.state`，若在模块中则为局部状态
        rootState,  // 等同于 `store.state`，只存在于模块中
        commit,     // 等同于 `store.commit`
        dispatch,   // 等同于 `store.dispatch`
        getters,    // 等同于 `store.getters`
        rootGetters // 等同于 `store.getters`，只存在于模块中
}
getters: {
    
    在store上注册getters, getters 的方法接受一下参数, state, getters

    在模块上定义的getter 可以接受四个函数 state getters rootState rootGetters
}

// 
vue.Store 实例方法

commit('(模块下的)/mutations属性名', 载荷(可以是变量, 多个变量传递一个对象), {如果跨模块, 需要在让 root: true })

dispatch('',  )
dispatch('(模块下的)/action属性名', 载荷(必须是一个对象), options: 中可以是root:true)

getters 和 state 相同: 打印一下 rootState 和 rootGetters

什么时候用vuex 

如果数据还有其他组件复用，建议放在vuex

如果需要跨多级组件传递数据，建议放在vuex

需要持久化的数据（如登录后用户的信息），建议放在vuex

跟当前业务组件强相关的数据,可以放在组件内。