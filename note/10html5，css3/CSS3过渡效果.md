#     过渡(transition):

+     过渡是CSS3中具有颠覆的特征之一,可以实现元素不同状态的平滑过渡(补间动画),经常用来制作动画效果;

      1. 补间动画: 自动完成从起始状态到中止状态的过渡,不用管中间的状态;

      2. 帧动画: 通过一帧一帧的画面按照固定顺序和速度播放.如电影胶片;

+     transition:
      
      1. transition-property 要使用过渡效果的css属性名称

      2. transition-duration 定义过渡效果花费的时间,默认是0;

      3. transition-timing-function:规定过渡效果的贝赛尔曲线;
         a) 属性值: ease | ease-in | ease-out | linear | ease-in-out |

      4. transition-delay 规定过渡效果何时开始,默认是0;
         a) 

      5. transition(简写): all(属性) 花费的时间 贝赛尔曲线 多少秒后执行过渡
    ```
    ```
