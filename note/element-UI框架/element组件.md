#  组件

##  layout(布局)

24分栏(栅格化布局)

###  基础布局

通过`col`, `row`组件, 并通过`col`组件的`span`属性进行布局。

如下布局为一行两列, 每列占十二栏:
```
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
```

###  分栏间隔

`Row` 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

如下布局设置分栏之间的间隔为20:
```
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
```

###  分栏偏移

通过制定 `col` 组件的 `offset` 属性可以指定分栏偏移的栏数。正数向右偏移。

###  对齐方式

通过 `flex 布局`来对分栏进行灵活的对齐。

将组件标签的 `type 属性`赋值为 `'flex'`，可以启用 `flex 布局`，并可通过 `justify` 属性来指定 `start`, `center`, `end`, `space-between`, `space-around` 其中的值来定义子元素的排版方式。

如下代码, 使用`flex布局`进行对齐:
```
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
```
###  响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

如下代码, 实现响应式布局:
```
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
```

###  基于断点的隐藏类

Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：

`import 'element-ui/lib/theme-chalk/display.css'`

包含的类名及其含义为: 

+  hidden-xs-only - 当视口在 xs 尺寸时隐藏

+  hidden-sm-only - 当视口在 sm 尺寸时隐藏

+  hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏

+  hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏

+  hidden-md-only - 当视口在 md 尺寸时隐藏

+  hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏

+  hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏

+  hidden-lg-only - 当视口在 lg 尺寸时隐藏

+  hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏

+  hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏

+  hidden-xl-only - 当视口在 xl 尺寸时隐藏

###  Row Attributes

###  Col Attributes
