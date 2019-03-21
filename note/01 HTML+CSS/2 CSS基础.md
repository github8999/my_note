
+   CSS样式表的引入方式
    ```
        1. 行内样式表/内联样式,以p标签为例:
            <p style="color:red;">
        
        2. 内部样式表
            <style>
                p{
                    color:red;
                }
            </style>

        3.外部引入
            <link href="xx.css">
    ```
---
+   选择器语法: 
    ```
            selector{
                key:value;
            }
    ```
+   常见的选择器:
    ```
        1. id选择器: #id值{}

        2. class选择器: .class值{}

        3. 标签选择器: p{}

        4. 通配符选择器 *{}
    ```
+   选择器常见的组合
    ```
        1. 并集选择器 
            
            selector1,selector2{} //指选中多个选择器;
        
        2. 交集选择器

            selector1selector2{} //指符合多个选择器的标签

        3. 后代选择器

            selector1 selector2 //可以是儿子孙子重孙子等等
        
        4. 直接子代选择器

            selector1>selector2 //只能是selector1的儿子
        
        5. 相邻兄弟选择器

            selector1+selector2 //同级的selector1后的下一个selector2

        6. 兄弟选择器

            selector1~selector2 //后面所有的兄弟选择器

        7. 属性选择器
            
            - [attr] //包含该舒心的选择器

            - [attr='value'] //包含attr属性且属性值为value的选择器

            - [attr^='value'] //包含attr属性且属性值以value开头的选择器

            - [attr$='value'] //包含attr属性且属性值以value结尾的选择器

            - [attr*='value'] //包含attr属性且属性值中包含value字符的选择器

        8. 伪类和伪元素
    ```
    ---
+   权重
    ```
        - ☆永记在心: !important > 内联样式 > id选择器 > class选择器|伪类选择器|属性选择器 > 标签选择器|伪元素选择器 > 通配符 > 继承
    ```
+   权重的计算规则
    ```
        - 如果是内联样式,则A = 1 ,否则 A = 0;

        - 如果是id选择器,则B = id选择器的数量;没有则B = 0;

        - 如果是class选择器|伪类|属性,则C = 该类别选择器的数量; 

        - 如果是标签选择器|伪元素,则D = 该类选择器的数量;

        - 然后依次比较ABCD的个数,如果相同,后定义的会覆盖前面; 
    ```
+   !important
    ```
        p{
            color:blue;!important; //此时该属性的权重最大
        }

        - 相同属性都有!important,!important会相互抵消;

        - 一般不会轻易使用!important ,因为我们一般无法预料自己什么时候需要覆盖一个已经指定了important的属性;   

    ```     
---
+   CSS的继承性和层叠性
    ```
        1. 继承是指,从最外层的标签开始,直到最小的元素都会继承该标签可以被继承的样式;

        2. color, text-xx, font-xx, line-xx(字体相关的属性)

        - tips: a标签不会继承字体的颜色(color)
        
        3. 层叠性是指,同一个标签,通过多个选择器写的样式都会作用到该标签上,且后面的相同样式会覆盖前面的样式;
    ```
---

