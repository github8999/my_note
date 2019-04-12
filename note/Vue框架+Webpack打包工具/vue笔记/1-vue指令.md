
##  vue常用的指令

+   **v-cloak,v-html,v-text 处理文本指令**

    1. **文本的闪烁问题：** data中的属性等 会替换对应的插值表达式。但是如果网速比较慢，没有请求到数据的时候，插值表达式 {{xx}} 会被显示到页面上。等到请求到数据之后页面上的插值表达式才会被 model层数据替换。

    2. **注意：** 只会替换插值表达式部分，不会影响标签中插值表达式意外的内容。

    3. **解决办法：**
        a) v-cloak,v-cloak属性会在请求到model中数据后移除;
    ```
        <style>
            
            <!-- 该属性会在请求到数据之后移除,因此请求到数据之后会显示替换插值表达式后的数据 -->
            [v-cloak]{
                display:none;
            }

        </style>
        <p v-cloak>{{msg}}</p>
    ```
        b) 使用v-text,请求导数据之后v-text中的内容会替换到标签上
    ```
        <p v-text="msg"></p>
    ```
        c) v-html,v-html与v-text类似,插值表达式和v-text都不会解析html标签,v-html可以解析标签;
---
+   **v-bind**
   
    1. **v-bind:要绑定的属性** ,该指令会让属性值部分,解析一个合法的JS表达式;

    2. **简写:**  v-bind: 可以简写为 : 
---
+   **v-on绑定事件指令**
 
    1. **v-on:事件类型** ,指令用来绑定事件,属性值部分会解析一个合法的表达式;

    2. **注意:** vue中事件调用的函数可以加括号也可以不加,js原生中不可以不加;
---
+   **按键修饰符**
    1. 系统内置的按键修饰符
    ```
        - .enter

        - .tab 

        - .delete(捕获 删除键 和 backspace )

        - .esc

        - .space

        - .up

        - .down

        -.left

        -.right

        -没有内置的按键可以通过Vue.config.keyCodes.按键名 = 按键码;
         Vue.config.keyCodes.f2 = 113;  --- 自定义按键修饰符 
    ```
---
+   **事件修饰符**

    1. **.stop:** 阻止冒泡

    2. **.prevent:** 阻止默认事件

    3. **.capture:** 事件捕获器执行

    4. **.self:** 事件只作用在该元素本身

    5. **.once:** 事件只触发一次

    6. **.stop 与 .self的区别**

        a) self指事件只作用在自己身上;

        b) stop阻止冒泡,但是不会阻止子标签的冒泡,点击子标签仍会触发该标签的事件;

### **修饰符顺序** 
>使用多个修饰符的时候, 不同的顺序会有不同的效果
```
    v-on:click.prevent.self 会阻止所有的点击，而 

    v-on:click.self.prevent 只会阻止对元素自身的点击。
```
### exact 修饰符
>.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。
```
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```
--- 
+   **v-model**

    1. **v-model ,** 会把value中的数据同步到model层数据中, 只会表单中的标签生效;

    2. **注意:** v-model绑定表单标签的时候,value 不能使用model中的数据(存在疑问)
---
+   **v-bind:应用多个class**

    1. **数组写法1:** class="['thin','red','active']", 

    2. **数组写法2:** class="['thin','red',{'active':flag}]" ==> flag的值会控制是否有该class值 

    3. **数组写法3:** class="['thin','red',flag?'active':'']"

    4. **对象写法:** class="{thin:true,red:true,active:true}"

    5. **注意:** 原生的class会与通过v-bind绑定的class叠加,而不是覆盖;
--- 
+   **v-bind:应用多个style**

    1. **数组形式:** 
    `<p :style=[{color:'red',{'font-size':'20px'}} ]>这是一个简单的栗子</p>`

    2. **对象形式:**
    `<p :style="{color:'yellow',fontSize:'20px'}">这是一个简单的栗子</p>`

    3. **注意:** 如果属性名直接写font-size的形式,要加引号 ,如果写成驼峰命名的形式可以不加引号

---
+   **v-for遍历的四种方法**

    1. **遍历数组** 
    ```
        list=[1,2,3,4,5,6];

        // in和of 都可以
        <p v-for="(item,index) in list">{{item}}---{{index}}</p>
    ```
    2. **遍历数组对象**
    ```
        <p v-for="(user,index) in list1">{{user.name}}---{{user.age}}---{{index}}</p>
    ```
    3. **遍历对象**
    ```
        user = { name:'刘一', age:18, sex:'男'}
        <p v-for="(val,key,index) in user">{{val}}---{{key}}---{{index}}</p>
        // 注意: 值在前,键在后,对象是无序排列index不建议使用;
    ```
    4. **遍历数字**
    ```
        <p v-for="(count,index) in 10">{{count}}---{{index}}</p>

        // 注意: 下标从0开始,但是数字是从1开始;
    ```
--- 
+   v-for中key的使用

    1. **key** 用来确保遍历数据的唯一性, 例: 如果使用v-for遍历数组的时候,向数组的前面添加了一个元素,如果第i身上绑定了数据,那么在前面添加了一个元素之后,数据会按照索引绑定到前面的一个身上,

    2. **注意:** key的值 只能是 Number 和 String 类型
    
    3. vue中列表循环需加:key="唯一标识" 唯一标识可以是item里面id index等，因为vue组件高度复用 增加Key可以标识组件的唯一性，为了更好地区别各个组件 key的作用主要是为了高效的更新虚拟DOM;
---
+   v-if与v-show

    1. **v-if,v-else,v-else-if ,**v-if每次都会删除或创建元素,消耗很大的切换性能,如果元素频繁切换.建议使用v-show

    2. **v-show,v-hide ,**v-show 操作元素的display:none/block ,有较高的初始渲染消耗,如果元素很少显示出来被用户看到,推荐用v-if

