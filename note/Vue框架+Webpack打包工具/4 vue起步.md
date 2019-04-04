
+   vue起步
    ```
        1. 导入框架js文件
            - 当我们导入包之后,在浏览器的内存中,就多了一个构造函数,我们new出来实例就是MVVM中的vm调度者

        2. 创建vue实例


            - 该实例会控制el内的所有内容,vue实例控制的区域就是指MVVM中的V
            var vm = new Vue({
                el:'#app',  
                
                
                - data就是MVVM中的model,专门用来保存每个页面的数据
                data:{ //页面中要用到的数据
                    msg:'欢迎学习vue'
                }
            })

            <div id="app"> 
                <p>{{ msg }}</p>
            </div>
        - 通过vue提供的指令,很方便的就能把数据渲染到页面上,程序员不再动手操作DOM元素了(前端vue之类的框架,不提倡我们去手动操作DOM元素)
    ```