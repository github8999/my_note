#  DOM(Document Object Model, 文档对象模型)

DOM的数据结构(树状)
![DOM树](imgs/domTree.png)

1. HTML的组成部分为节点, 在HTML中一切都是节点

2. document 文档节点

3. html标签是HTML中的根节点

4. 每个标签是一个元素节点

5. 标签中的文字是文本节点

6. 标签中的属性是属性节点

7. 标签中的注释是注释节点

###  获取节点

1. 通过`id`获取节点: `document.getElementById()`;

2. 通过`class`获取节点: (存在兼容问题, 不兼容ie8及以下)
```
document.getElementsByClassName();
// 返回值是一个伪数组, HTMLCollection
```
3. 通过标签获取节点
```
document.getElementsByTagName()
// 返回值是一个伪数组, 可以通过通配符获取所有的标签
```
4. 通过选择器获取单个标签(H5新方法，兼容ie8, 但不兼容ie8以下)
```
document.querySelector()
// 多个标签只会获取第一个
```
5. 通过选择器获取标签
```
document.querySelectorAll()
// 返回值是一个伪数组
```
###  获取父节点

`node.parentNode`, 一个节点只有一个父节点。

###  获取兄弟节点

1. 获取上一个兄弟节点

  node.previousSibling; 
  // 在 ie9 以下指上一个元素节点, 在谷歌等浏览器中指下一个任意类型的节点;

  node.previousElementSibling;
  // 下一个元素节点, 不兼容ie9以下

  - 兼容写法: node.previousElementSibling || node.previousSibling

2. 获取下一个兄弟节点

  node.nextSibling;
  // 兼容同previousSibling 

  node.nextElementSibling;

  - 兼容写法: node.nextElementSibling || node.nextSibling

###  获取子节点

1. 获取第一个子节点

pnode.firstChild;
// 兼容同上

pnode.firstElementChild; 

兼容写法: `pnode.firstElementChild` || `pnode.firstChild`

2. 获取最后一个子节点

pnode.lastChild
// 兼容同上

pnode.lastElementChild

兼容写法: `pnode.lastElementChild` || `pnode.lastChild`

3. 获取所有的子节点

pnode.childNodes
// 返回所有类型的子节点集合

pnode.children
// 返回元素子节点, 但ie9以下包含注释节点

4. 判断节点类型, nodeType

    - node.nodeType == 1, 表示元素节点

    - node.nodeType == 2, 表示属性节点

    - node.nodeType == 3, 表示文本节点

    - node.nodeType == 8, 表示注释节点

5. 兼容: 
```
function getChildren(pNode){
    var nodes =  pNode.children;
    var elNodes = [];

    for(var i = 0 ; i < nodes.length ; i++ ){
        if(nodes[i].nodeTyoe == 1){
            elNodes.push(nodes[i]);
        }
    }
    return elNodes;
}
```
###  节点操作

获取节点都是属性,操作节点都是函数/方法

1. 创建节点
`document.createElement()`,创建节点之后不会直接显示到页面上, 要配合插入节点使用

2. 插入子节点

    - `document.appendChild(cnode)`, 按照先后顺序插入

    - `document.insertBefore(cnode, 参照节点)`, 如果参照节点为null, 则会按先后顺序插入到最后

3. 删除子节点

    - pNode.removeChild(cnode)

    - pNode.parentNode.removeChild(cnode), 自己删除自己

4. 克隆节点

    - node.cloneNode(), 不传参数时为浅克隆, 浅克隆不会赋值后代节点

    - node.cloneNode(true), 参数为true时为深克隆, 会克隆后代节点

###  节点属性操作

1. 获取属性

    - getAttribute(属性名)

2. 设置属性

    - setAttribute(属性名, 属性值)

3. 删除属性

    - removeAttribute(属性名)

###  value / innerHTML / innerText / textContent

1. value 属性一般只对表单标签有效

2. innerHTML 会解析标签, innerText 不会解析标签

3. innerText 和 textContent 用法相同, 但后者较老可以支持老版本的火狐

4. 使用innerHTML追加元素, 会清空之前的元素重新添加, 会使之前的元素绑定的事件失效

###  其他常用属性

1. `document.body`, 可以直接获取body标签

2. `document.documentElement`, 可以直接获取html标签

3. `document.all`, 获取 document 文档节点下的所有标签, 返回值是一个伪数组

###  操作样式

通过 node.style 读写样式只能对行内样式(内联样式)进行操作, 这种方法无法获取到内联以外的样式

1. 获取当前标签的所有样式(只读):

    - window.getComputedStyle(元素,伪元素(通常设置为null)).样式名
    // 不兼容ie9以下

    - node.currentStyle.样式
    // 只支持ie

2. 二者区别

    - window.getComputedStyle(el,null): 如果没有设置样式的宽高等属性, 不会获取到默认值auto, 而是获取页面上当前元素看到的宽高

    - currentStyle.样式, 会获取到默认值auto, 为了避免获取到auto, 尽量给css宽高等属性一个初始值。

3. 兼容: 

    - `window.getComputedStyle? window.getComputedStyle(node,伪元素) : node.currentStyle`;  

4. offsetLeft 与 style.left 的区别:

    - 前者为只读, 后者为读写

    - 前者的left值等于定位中的left + 子元素的 `margin-left` + 父元素的 `padding-left`, 后者只会获取到行内的left值

    - 前者获取到的值是一个整数, 且是可计算的Number类型, 后者获取到的是一个, 且可以获取到小数点

###  DOM的其他方法

获取title,body,head,html节点:

1. document.documentElement 获取html节点

2. document.body            获取body节点

3. document.head            获取head节点

4. document.title           获取title节点