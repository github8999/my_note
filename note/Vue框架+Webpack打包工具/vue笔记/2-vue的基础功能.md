##  vue的基本使用

### vue方法小结
    ```
        var vm = new Vue({
            el:'#app', 

            data:{}, 

            methods:{}, 

            filters:{}, // 过滤器

            directives:{}, // 自定义指令

            components:{}, // 组件

            props:[]/{}, // 父向子通信

            computed:{}, // 计算属性
            
            watch:{}, // 监听

            // 生命周期钩子

            beforeCreate:{},
            created:{},

            beforeMount:{},
            mounted:{},

            beforeUpdate:{},
            update:{},

            beforeDestroy:{},
            destroyed:{}

        })
    ```
---
### **data数据**
        
    1. 如果修改了data中的数据, 会自动渲染到页面上

    2. **数组的不可检测问题:**


        a) **问题1:** 如果使用length属性清空data中的数据, **vue不会检测到** ,因此也不会同步到页面上;
        
        **解决办法:** 让数组等于空数组, 而不是让 length=0;

        b) **问题2:** 使用数组的索引下标修改值,也不会同步到页面上, vue不能检测
        
        **解决办法1:** 使用splice(要替换元素的索引, 1, '替换的元素')

        **解决办法2:** 使用vue内置的强制响应方法:
        ```
        // Vue.set(vm.items, indexOfItem, newValue) 
        this.$set(this.items,index,newVal)
        ```

        




