+   组件中的data

    <font style="color:lightgreen">
    a）组件可以有自己的 data 数据        

    b）组件中的data和vue实力的data不太一样，实力中的data是一个对象；但是组件中的data必须是一个方法，在这个方法内部返回一个对象才可以。

    c）组件中的data在组件模板中的使用 与 vue实例中的data在vue实例控制区域的使用方式相同。例:
    </font>
    ```
        <div id="#app"></div>

        <script>
            var vm = new Vue({
                el:'#app',

                components:{

                    myCom:{
                        template:'<div>{{msg}}</div>',
                        data(){
                            return {
                                msg:'这是我的myCom组件'
                            }
                        }
                    }

                }
            });
        
        </script>
    ```