#   canvas
--- 
+   canvas概述(了解)
    ```
        - canvas就是画布,是HTML5非常重要的更新!目的就是革命,革Flash的命!一统游戏江湖!一统动画江湖!一统网页广告江湖!以前是网页中播放Flash需要安装Adobe Flash Player的插件;现在canvas是集成在浏览器里面;

        - canvas和Flash的思路完全不一样,canvas对cpu的要求较低;
    ```
+   canvas特殊性,如果浏览器不识别的话就是一个普通的div,如果识别就是一块画布;
```
    - canvas是一个矩形的画布,可以使用js在上面绘画控制其每一个像素;

    - canvas标签使用JS在网页上绘制图像,本身不具备绘画能力;

```

+   canvas主要应用的领域(了解)
    ```
        1. 游戏

        2. *可视化数据

        3. *banner广告

        ...
    ```

##   canvas标签语法和属性(重点)
---
    
+   1 canvas特性
    ```
        - canvas是一个块标签,如果不支持(IE9以上支持)就是一个普通的div,如果支持就是一个画布,由于移动端使用都是最新的浏览器,canvas在移动端比较热;

    ```
+   2 canvas的宽高
    ```
        - canvas的宽高是通过属性来控制,或js中控制canvas的width和height属性 ,例: <canvas width="600" height="500"></canvas> // 属性不建议使用css样式控制,会拉伸canvas;
    ```
+   3 canvas坐标系
    ```
        - 左上角是0,0点 ,向右x轴增大,向下y轴增大;
    ```
    

+   4 canvas上下文,代表画笔和绘图工具
    ```
        - var ctx = canvas.getContext('2d'); // 获取2D上下文,获取3D上下文参数为webgl
    ```

+   5 绘制
    ```
        ctx.moveTo(100,100); //把画笔移动到100,100的位置

        // 描绘画笔路径
        ctx.lineTo(200,100); //从画笔位置画一条直线, 到200,100

        ctx.lineTo(100,200); //从当前位置200,100 画一条直线到100,200 

        // 描线
        ctx.stroke();
    ```

