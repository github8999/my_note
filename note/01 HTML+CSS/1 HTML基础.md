+   常见的属性
    ```
        - 属性总是以键值对的形式出现;

        - id: id属性作为标签的唯一标识,在同一个页面不能有不同的id值;

        - class: class属性用来为标签分组,拥有相同的class的标签可以看做是一组,一个页面中可以出现相同的class属性值,一个标签如果有多个class值以空格隔开,例: class="class1 class2";
    ```
---
+	常见的标签
	1. meta :
		```
			- 设置页面的字符集 <meta charset="utf-8">
		
			- 设置网站的描述(搜索该网页时的描述) <meta name="description" content="对网站的描述内容">		
		
			- 设置网页的关键字(通过这些关键字可以搜索出该网页) <meta name="keywords" content="关键字们">
		```

	2. h1~h6: 标题标签
		```
			- 一个页面中理论上只应该存在一个h1标签,但写多个出现也能正常运行;
		```

	3. p: 段落标签

	4. br: 换行标签
		```
			- html中换行和空格都不敏感,如果存在一个或多个空格和换行都会被当做一各空格处理;(ps:开发中基本不会使用)
		```
	5. hr: 下划分割线

	6. img 图片标签
		```
			- alt="图片加载失败时的提示文字"
		```
	7. a标签(超链接)
		```
			- href 指向一个连接,
			
			- target 是打开页面的位置: _self(默认在当前窗口打开) /_blank(新窗口打开) /_parent(在父亲窗口打开) /_top(在最外层窗口打开,结合画中画使用)

	8. em和i: 斜体字

	9. b和strong: 加粗

	10. sup: 字在上面(上标)

	11. sub: 字在下面(下标)

	12. ins 下划线

	13. del 删除线

	14. ul li 无序列表

	15. ol li 有序列表

	16. dl dt dd 自定义列表

	17. iframe画中画
		```
			- 可以在当前页面嵌入其他的页面,可以使用iframe引入公共的头部和页脚;
		```

---
+	相对路径和绝对路径
	```
		1. 绝对路径

			a) 网络绝对路径
			b) 本地绝对路径
		2. 相对路径
			
			a) 同级: xx.jpg
			b) 上一级: ../xx.jpg
			c) 下一级:xx/xx.jpg
	```
--- 
+	form表单
	```
		- 表单提供向后台提交数据的能力

		- 汉语在url中会被转码;

		1. method: 提交的方式;

		2. action: 提交到的地址;

		3. name: 表单特有的name属性;
			- 识别表单标签,向后台传递数据,需要提交数据到后台的标签必须要有name属性;

		4. value是input元素特有的属性,可以设置默认值, 可以通过在页面中输入内容覆盖;

		5. readonly和disabled:
			- readonly 只读属性: value的值不可以被修改,但是数据会被提交到后台;

			- disabled 不可用:value的值不可以被修改,也不会提交到后台;
	```

+	表单常用标签
	```
		- label 标签可以扩大文本框的获取焦点范围,让文本框点击别的标签页可以出发
			
			a) <label>用户名<input type="text"><label>

			b) <label for="#id"><label>点击label可以获取到对应id input的焦点;

		1. form ,表单
			- action 提交的地址
			- method 提交的方式

		2. 隐藏域 <input type="hidden">

		3. 文本框 <input type="text">

		4. 密码框 <input type="password">

		5. 单选按钮 <input type="radio">
			- 单选按钮要用name分组,name相同为同一组;

		6. 多选按钮 <input type="checkbox">
			- 多选按钮也要用name分组,name相同为同一组

		7. 上传文件 <input type="file">
			- 上传文件标签要给form添加enctype="multipart/form-data";

		8. 下拉列表 select>option
			- 列表默认项 selected
		
		9. 文本域 textarea
		
		10. 提交按钮 <input type="submit">

		11. 重置按钮 <input type="reset">

		12.表单分组 fieldset>legend;

	```	

+	表格标签
	```
		1. table > tr > td | th : 标签的样式属性已经过时,使用css控制
			
			- cellspcing 单元格间距

			- cellpadding 单元格内边距

			- bgcolor 背景颜色;

			- align 水平对齐方式;

			- rowspan 行合并

			- colspan 列合并
	```









+   ## 五大主流浏览器(按时间顺序):
	- 1.ie浏览器
	- 2.opera浏览器
	- 3.safari浏览器
	- 4.firefox
	- 5.chrome
+ 四大内核:
	- trident内核又叫ie内核
	- gecko内核又叫火狐内核
	- webkit safari
	- blink内核又叫chrome内核
