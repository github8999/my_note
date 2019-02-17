var imgsArr = ["m1.jpg","m2.jpg","m3.jpg","m4.jpg","m5.jpg"];
//获取元素节点
var vpageEle = document.getElementsByClassName("viewpages")[0];  //获取轮播图ul节点
var dotsEle = document.getElementsByClassName("banner-dots")[0];  //获取dots节点:ul列表
var btnL = document.getElementsByClassName("btn-left")[0];
var btnR = document.getElementsByClassName("btn-right")[0];

//计数器
var count = 0;
//初始化轮播图列表
initViewpages();
btnR.onclick = function(){
	count++;
	if(count==imgsArr.length){
		count=0;
	}
	vpageEle.style.marginLeft = -1*count*1200+'px';
	changeDots(count);

};
btnL.onclick = function(){
	count--;
	if(count==-1){
		count=imgsArr.length-1;
	}
	vpageEle.style.marginLeft = -1*count*1200+'px';
	changeDots(count);

}

//初始化轮播图函数(dots imgs)
function initViewpages(){
	vpageEle.style.width = imgsArr.length*1200+'px';
	dotsEle.style.marginLeft = -1*imgsArr.length/2*(10+10)+'px';
	var dotsStr = '';
	var vpageStr = '';
	for(var i = 0;i<imgsArr.length;i++){
		vpageStr += '<li class="viewpages-item"><img class="viewpages-img" src="imgs/'+imgsArr[i]+'" ></li>	'; 
		dotsStr += i==0?'<li class="active"></li>':'<li></li>';
	}
	vpageEle.innerHTML = vpageStr;
	dotsEle.innerHTML = dotsStr;
	
	//遍历给dots绑定事件 dotsEle
	var dotsChildArr = myChildren(dotsEle);
	for(var i = 0 ; i < dotsChildArr.length ; i++){
		dotsChildArr[i].index = i;
		dotsChildArr[i].onclick = function(){
			changeDots(this.index);
			vpageEle.style.marginLeft = -1*this.index*1200+'px';
			count=this.index;
		}
	}
}
//改变dots active样式
function changeDots(count){
	var dotsArr = myChildren(dotsEle);
	var dotClass=[];
	//对他们遍历
	for(var i = 0 ; i < dotsArr.length ; i++){
		var dotClassAttr = dotsArr[i].getAttribute("class");
		//获取当前元素的class分割为数组
		if(!dotClassAttr){
			continue;
		}
		dotClass = dotsArr[i].getAttribute("class").split(" ");
		//判断找出他们中有active的元素
		if(dotClass.indexOf("active")!=-1){
			dotClass.splice(dotClass.indexOf("active"),1);
			//设置该元素的class
			dotsArr[i].setAttribute("class",dotClass.join(' '));
		}
	}
	//设置当前count的class
	if(!dotsArr[count].getAttribute("class")){
		dotsArr[count].setAttribute("class","active");
	}else{
		dotsArr[count].setAttribute("class",dotsArr[count].getAttribute("class")+" active");
	}
}
function myChildren(pNode){
	var children = pNode.children;
	var rs = [];
	for(var i = 0 ; i < children.length ; i++){
		//过滤元素节点
		if(children[i].nodeType == 1){
			rs.push(children[i]);
		}
	}
	return rs;
}

