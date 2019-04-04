## 	框架概述(了解)
+	框架
	```
		- jQuery: dom操作的封装

		- zepto.js: jQuery移动端的封装

		- bootstrap: ui框架,快速构建响应式界面

		- layerui: ui框架

		- animate.css 动画框架
	```

+	插件
	```
		- swiper.js 轮播插件

		- echarts 报表插件

		- lightbox.js 灯箱

		- 
	```

---
##  Vue Guide
+	3 框架MVC与MVVM
	```
		- mvc是后端的分层开发模式;view是视图层, model是数据模型层, controller是控制层(业务逻辑层)

		- MVVM是前端视图层的概念,主要关注与视图层的分离,也就是说MVVM把视图层分为model , view , viewModel(VM);
		
		1. 两者的关系:
			- app.js: 项目的入口,一切请求,都要先进入这里进行处理,注意: app.js没有分发路由的功能,需要调用router.js进行路由的分发处理

			- router.js: 这是路由的分发处理模块:(为了保证路由模块的职能单一,路由模块只负责路由的分发,不负责业务逻辑的处理), 业务逻辑交给controller层处理
			
			- controller业务逻辑处理层,为了保证职能单一,此模块只负责处理业务,不负责处理数据的curd

			- model层操作数据库执行对应的sql语句进行数据的curd操作,create update read delete;

	```