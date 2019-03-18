+     jQuery中的选择器:
      
      1. 通过id名获取jQuery对象: $("#id值");
      
      2. 通过标签名获取jQuery对象: $("标签名");
      
      3. 通过class属性获取jQuery对象: $("class值");

      4. 通配符$("*");
      
      5. 标签类选择器(交集选择器): $(标签.class值); 

      6. 多条件选择器: $(选择器1,选择器2,...);

      7. 后代选择器: $(选择器 后代元素选择器);

      8. 直接后代选择器: $(父选择器>子代选择器);
         - $(div *) //获取div中的所有元素
      
      9. 奇偶选择器: $(li:even) 偶数/ $(li:odd) 奇数 (下标从0开始)

      10. 索引选择器: gt(大于) lt(小于) eq(等于) 
          - $(div:eq(4)) 获取索引为4的div元素 
          - $(div:gt(4)) 获取索引大于4的div元素
          - $(div:lt(4)) 获取索引小于4的div元素
        
      11. 取反$(div:not(:odd);first last

      12. $(div:empty) 没有任何类型子节点的div
      13. $(div:parent) 当爹的div元素,有任何类型子元素的div 
      14. $(div:contains('指定文本')); 包含指定文本内容的div
      15. $(div:has(selector) :包含某选择器的div

+     常见的方法:
     

      5. show() / hide()  显示 / 隐藏;
      6. index() 直接元素.index可以获取到当前的索引;
      7. siblings() 获取当前元素的所有兄弟元素
      8. find() 针对当前的标签,找里面的后代标签;
      9. attr() 可以添加多属性
         a) 属性和属性节点的区别:任何对象都有属性;但是只有DOM对象才有属性节点;
         b) 传递一个参数是获取属性,传递两个参数是设置属性;
         c) 如果是获取,则只会返回第一个元素的属性节点; 如果是设置,有多少元素就会给多少元素的属性节点设置; 如果设置元素节点中没有的属性节点则会新增一个属性节点;

      10. removeattr('class name'); 移除属性,删除所有找到元素指定的属性节点 多个属性用空格隔开

      11. prop()与attr类似:

      12. removeProp
      具有 true 和 false 两个属性的属性，如 checked, selected 或者 disabled 使用prop()，其他的使用 attr()

      
      - 这些方法中如果什么都不写就是获取，如果写内容就是赋值;
      
+     class操作相关方法:
      1. addClass();
      2. removeClass();
      3. toggleClass();
      4. hasClass();

+     文本相关操作
      1. .html()  类似于innerHTML;
      2. .text()  类似于innerText和textContent;
      3. .val()  设置input中的value值,类似于value;
    - 这些方法中如果什么都不写就是获取，如果写内容就是赋值;

+     操作css样式方法:
      4. .css()  设置元素的样式,类似于style属性;
         a) css('','');
         b) css("":"","" :"");
         c) css('','').css('','') 链式添加多样式; 链式如果大于3步建议分开
      2. 获取样式.css('');

+     尺寸和位置操作
      1. width 元素的实际宽度 不包括边框
      2. innerWidth 
      3. outerWidth
      4. offset 元素到窗口的偏移量
      5. position 元素到定位元素的偏移量 只读

+     scrollTop
      1. $().scrollTop();可以获取和设置 
         a) 获取兼容: $('html').scrollTop+$('body').scrollTop;
         b) 设置兼容: `$(html,body).scrollTop(300);` // 不需要单位

+    事件绑定: jQuery事件可以添加多个相同和不同的事件,不会覆盖
     1. 事件名(不带on)(fn)
        - 效率略高,但部分事件没有被实现
     2. on('事件名',fn)
        - 效率略低,所有事件都可以注册

+    事件的移除: 
     1. jQuery对象.off(); 
     2. 不传参是指移除当前元素上所有的事件
     3. 传事件对象,指移除所有指定类型的事件
     4. 传两个参数,是指移动某个指定事件的某个驱动函数;

+    事件的冒泡和默认行为
     1. 在子元素的点击驱动函数中通过return false;就可以取消冒泡行为;
     2. 还可以通过事件对象来取消冒泡行为:
   ```
        $('btn').click(function(event){  // 传递事件对象
            event.stopPropagation
        });
   ```
     3. 默认行为: 在html中有些标签会有默认的事件,或者是浏览器上的内容选中事件;这些都是浏览器的默认行为;
     4. 阻止浏览器的默认行为: a) return false b) event.preventDefault();

+    事件自动触发:
     
     1. 事件源.triggle('事件名') //会触发事件冒泡,会触发标签默认行为
     2. 事件源.triggleHandler('click'); //不会触发事件冒泡,不会触发事件默认行为 
     3. 注意: 自动触发a标签的时候,trigger和triggerHanler都不会触发a的默认行为,如果要触发a的默认行为要把a包装一下,通过触发a的子元素的默认行为来触发a;

+    自定义事件:
     $().on('myclick',function(){ ... });
     $().trigger('myclick'); 
     不能使用$().事件名的形式,因为这种方式是以函数的形式实现的,很多事件没有进行封装;因此自定义事件也没有进行封装,所以不能这样使用;

+    事件命名空间:
     1. 在开发过程出可能会有不同的人对同一个元素添加同一个事件,为了让添加的事件更一目了然,通过事件自动触发只执行一个事件,可以使用事件命名空间这种方法; 
     2. 满足事件命名空间的两个条件:
        a) 必须使用on()绑定事件;
        b) 通过trigger触发事件;
        ```
            $('div').on('click.lisi',function(){ ... })
            
        ```

+    事件命名空间面试题：
     1. 嵌套元素的同一个命名空间的事件,使用trigger自动触发事件的同时会触发冒泡的效果;
     2. 而没有命名空间的事件不会被触发;
     3. 使用trigger触发的不带命名空间的事件,父元素和子元素上的该事件,有和没有命名空间的都会被触发;
     ```
         例: 
          <div class="father">
            <div class="son"></div>          
          </div>

          $('.father').on('click.ls',function(){ ... });
          $('.son').on('click.ls',function(){ ... });
          $('.father').on('click',function(){ ... });
          $('.son').on('click',function(){ ... });

          $('son').trigger('click'); --> 此时会触发上述四个事件;
          $('son').trigger('click.ls'); --> 此时会触发命名空间相同的两个事件;

     ```

+    事件的委托  
     1. 事件委托
         $('ul')delegate('li','click',function(){

         }); 

+    移入移出事件:    
     1. 通过one绑定的事件只会执行一次     
     2. mouseover
     3. mouseout
     4. 注意: 鼠标移入事件移入子元素时,会触发一次鼠标移除事件在触发一次鼠标移入事件;

     5. mouseenter
     6. mouseleave
     7. 这一对父元素的移入移出,不会触发子元素的移入移出事件;开发中推荐使用;

     8. hover() //监听鼠标的移入移出,接收两个驱动函数,第一个执行移入,第二个执行移出;

     
   ```
        <div>
            <div></div> 
        </div>

        // 子元素发生移入移除时,也会触发父元素的移入移出事件;

+     添加节点: 
     1. $.('div').append($(<a class='a'></a>));
     2. $(<a class='a'></a>).appendTo($.('div'));

     3. prepend() perpendTo()

     4. after before()
     5. empty() 移除所有的子节点
     6. remove()
     7. detach
     8. eq()
     9. replaceWith()
     10 .children()


      CND 
      排他思想
      开关思想

      