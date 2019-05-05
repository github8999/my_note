# vue移动端结构步骤

+	在index页面 配置移动端meta标签
	1. meta name="viewport" content="width=device-width,initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
	2. `<meta http-equiv="X-UA-Compatible" content="IE=edge"> ` ie使用最新内核
	3. `<meta name="renderer" content="webkit">` 双内核使用webkit内核

2. 配置pxtorem 
	
	1. 在项目文件下 npm install lib-flexible --save
	2. 在项目文件下 npm install postcss-pxtorem --save
	3. 在mian.js 引入 flexible : import 'lib-flexible' // 根据当前的手机分辨率重置 html 的 fontsize
	4. 在项目根目录下的postcss.config.js 中配置 postcss // 用于把css中的 px 转换成 rem
		module.exports = {
			plugins: {
		    autoprefixer: {},
		    "postcss-pxtorem": {
		      "rootValue": 75, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）
		      "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
		   }
		  }
		}
																																			
+	src 下的 assets 中写静态文件 重置样式和页面中的图片应该写在 assets/style 中 通过import 引入到 main.js 中, (所有的组件都会应用在#app 中所以引入到main.js中会对所有组件都生效)

##  规范 
1. .vue 文件名首字母一般大写 , 使用import 引入的组件名一般和 文件名相同 

2. 页面中的`<style>` 中 scoped 属性 会是该样式只作用在当前页面 lang属性用于指定 使用的是css/less/scss

3. 在vue 中不能通过相对路径引入图片, 必须使用模块化形式引入
	错误写法: => img :'../imgs/xx.jpg'
	正确写法: => require('@/assets/imgs/xx.jpg')  


##  swiper在vue中的应用步骤

+	在项目根目录中 npm install vue-awesome-swiper --save

+	mount with global // 全局引入
		import Vue from 'vue'
		import VueAwesomeSwiper from 'vue-awesome-swiper'

		// require styles
		import 'swiper/dist/css/swiper.css'

		Vue.use(VueAwesomeSwiper, /* { default global options } */)

+	mount with component // 作为组件使用
		// require styles
		import 'swiper/dist/css/swiper.css'

		import { swiper, swiperSlide } from 'vue-awesome-swiper'

		export default {
		  components: {
		    swiper,
		    swiperSlide
		  }
		}

##	手机测试网页

1. 手机和电脑在同一无线网络下, 通过ipconfig 获取 无线ip地址

2. 把开启服务的 URL 中的 localhost 换成 无线网络的ip地址

3. 把 更改过的 URL 粘贴到 自动生成二维码中 生成二维码

4. 使用手机扫描二维码, (在微信上显示会很慢), 并使用浏览器打开

##	iconfont图标使用

iconfont 一般用于后台图标, 因为后台图标没有很高的要求

常用的icon 插件: fontawesome图标大全 , iconfont 阿里巴巴矢量图 

1. 选择图标下载下来, 解压之后需要的文件
```
iconfont.css

// 下列文件用于兼容各个浏览器iconfont 
iconfont.ttf
iconfont.svg
iconfont.woff
iconfont.woff2
iconfont.eot
```

2. 在标签上加上class  `<i class="iconfont font-图标名"></i> ` 就可以使用了

##	导航守卫

##	路由元信息

##	keep alive


