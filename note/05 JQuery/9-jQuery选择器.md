+   jQuery中常用的选择器(以div为例):
    ```

        1. id选择器: $('#id');

        2. 标签选择器: $('div');

        3. class选择器: $('.class');

        4. 通配符选择器: $('*');

        5. 标签类选择器(交集选择器): $('div.box1');

        6. 多条件选择器(并集选择器): $(div,li);

        7. 后代选择器: $(.outer .inner);
            - $('div *') --> 获取div中的所有后代元素;

        8. 直接后代选择器: $('.parent>.child');
    ```

+   过滤选择器(类似于为标签):
    ```
        1. $('div:odd'); 奇数

        2. $('div:even'); 偶数

        3. $('div:gt(4)'); 大于4 

        4. $('div:lt(4)'); 小于4

        5. $('div:eq(4)'); 等于4

        6. $('div:not(odd)'); 不是奇数

        7. $('div:last') 最后一个

        8. $('div:first') 第一个

        9. $('div:empty') 没有任何类型子节点的div

        10. $('div:parent'); 有任何类型后代节点的div( 当爹的div)

        11. $('div:contains(str)'); 包含指定文本的div 

        12. $('div:has(selector)'); 包含指定选择器的div
    ```