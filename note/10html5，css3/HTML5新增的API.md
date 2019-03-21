1. 多媒体
    ```
        1. 方法:
            - load() 加载
            - play() 播放
            - pause() 暂停
        
        2. 属性:
            - currentTime: 视频播放的当前进度 毫秒
            - duration: 视频的总时间
            - paused: 视频播放的状态
        
        3. 事件: 
            - oncanplay: 事件在用户可以开始播放视频/音频(audio/video)时触发
            - ontimeupdate: 通过该事件来报告当前的播放进度
            - onended: 播放完时触发

        4. 全屏: video.webkitRequestFullScreen();
    ```
2. 拖拽
    ```
        - 在HTML5的规范中,我们可以通过为元素增加 draggable="true" 设置元素可以拖拽;
        1. 拖拽元素
            - 页面中设置了draggable="true" 属性的元素
        2. 目标元素
            - 页面中任何一个元素都可以成为目标元素
        3. 事件监听
            - 拖拽元素:
                ondrag
    ```
3. 地理定位已经被谷歌屏蔽了,可以使用百度地图插件

4. web存储
    ```
        传统方式是以document.cookie来进行存储的,但是由于其存储大小只有4k左右,且解析也相当的复杂,给开发带来诸多不便,HTML5规范则提出新的存储方案:
        
        -Storage存储
        
        window.sessionStorage
        
        window.localStorage 

        特性: 
        1. 设置读取方便
        2. 容量较大,sessionStorage约5M,localStorage约20M
        3. 只能存储字符串,可以将对象通过JSON.stringify()编码后存储;

        - window.sessionStorage
            1. 生命周期为关闭浏览器窗口
            2. 在同一个窗口下数据可以共享
        

        - window.localStorage
            1. 永久生效,除非手动删除
            2. 可以多窗口共享

        - 方法详解

            setItem(key, value) 设置存储内容

            getItem(key) 读取存储内容

            removeItem(key) 删除键值为key的存储内容

            clear() 清空所有存储内容
            
            key(n) 以索引值来获取存储内容

    ```