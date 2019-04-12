

## 框架的介绍
### jquery
> 是前端dom的封装,用于快速操作dom元素实现增删查改,而且实现了对ajax的封装.15年之前占据前端半壁江山.

### mv-\*框架/高级框架

### angular.js/angular-n.x
> AngularJS [1]  诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。首次实现了"双向数据绑定",及在前端开发实现了MVC开发模式.

+ mvc model  view   controller
+ 视图层 => 控制器 => 数据模型
+ ui框架  element-ui  http://element.eleme.io/#/
+ ionic(混合开发框架)  https://ionicframework.com/docs  angularjs开发移动app的框架


### react.js
> React 起源于 Facebook 的内部项目,就在2013年5月开源了.世界上目前使用最多的框架.有着非常丰富的生态圈.

+ mvc框架
+ ui框架  ant-design  https://ant.design/docs/react/introduce-cn
+ reactnative(混合开发框架)  https://reactnative.cn/  使用JavaScript和React编写原生移动app


### vue.js
> Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。vue是有国人尤雨溪开发的,目前是国内使用最多的框架.

+ mv-vm 框架
+ ui框架  element-ui  http://element.eleme.io/#/
+ ant-design(目前也在出vue版本)  https://ant.design/docs/react/introduce-cn
+ iview https://www.iviewui.com/docs/guide/install
+ weex(混合开发框架) https://weex.incubator.apache.org/


## vue
> 渐进式JavaScript 框架, 易用,灵活,高效.https://cn.vuejs.org/.


### 单页应用


### 生命周期
> 有助于理解vue的原理.

+ created
+ mounted
+ destroyed


### 模板语法
+ {{}}



### 指令
> v-xx是vue的指令

+ v-once 只能在第一次渲染 之后不会响应 
+ v-html 在页面插入可执行的html代码
+ v-bind 把vue页面中的html的属性变为可以读取作用域值的动态属性
+ v-if v-else 控制是否渲染,不是display:none
+ v-show 控制元素显示/隐藏 和v-if区别在于,v-show是直接存在的元素的css样式切换,而v-if是直接渲染与否.
+ v-on  添加方法
+ v-model 使表单和数据模型对应


### js表达式


### 计算属性
> 如果不存在修改数据,只需要修改展示内容,可以使用计算属性对作用域数据进行"修饰",修饰完的数据,页面可以直接使用

### 方法
> 方法也可以实现计算属性的需求.两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的,而方法每调用一次都会重新执行一次.


### 监听属性
+ axios  ajax的封装,以后会经常用到!
+ lodash.min.js  是一个一致性、模块化、高性能的 JavaScript 实用工具库。

### class
+ 对象形式
+ 数组形式


### style
+ 对象形式
+ 数组形式


### key
> Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可.


### $set
> this.$set 强制响应更新


### 数组检测更新(重要)
+ 变异方法可以直接更新

+ 非变异方法

+ 强制更新


### 对象检测更新(重要)



### 事件处理


### 修饰符
+ .number 强制类型为number
+ .trim 去掉收尾空格
+ .stop 阻止冒泡
+ .prevet  阻止默认
+ .once 只触发一次
+ .enter 回车触发
+ .esc  取消触发
+ .ctrl 组合按键
+ .exact 精确组合 

### 事件绑定
+ 可以直接传参 
+ $event


## vue组件
> 注意事项
	+ vue的组件名称命名 必须用多个字符连接 不能用单字母(避免和原生的html标签冲突)
	+ 组件内部的data必须是一个函数,返回了一个数据对象
	+ 组件必须有且只有一个根节点
	+ 页面是忽略大小写的,所以注册的驼峰命名法的组件在页面应该以-形式连接

### 全局注册
	

### 局部注册


### 组件通信-父类向子类组件传值
+ props属性
+ props的类型验证  

### 单向数据流
> 组件的数据流必须是自上而下的,不能直接在子组件修改从父类传递给子组件的值,解决方案: 

+ 在子组件用一个新的值去接收 
+ 可以用计算属性"装饰"
+ sync的使用场景及使用方式
	- 传递的参数用.sync修饰
	- 子组件发送 $('update:xx',xx);









