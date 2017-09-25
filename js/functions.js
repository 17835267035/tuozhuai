// function getClass(classname){
// 	if(document.getElementsByClassName){  //换成flase
// 		return document.getElementsByClassName(classname);
// 	}else{
// 		var newarr = [];
// 		var all = document.getElementsByTagName('*');
// 		for(var i=0;i<all.length;i++){
// 			if(all[i].className == classname){
// 				newarr.push(all[i]);
// 			}
// 		}
// 		return newarr;
// 	}
// }

function getClass(classname,ranger){  //ranger是对象
	ranger = ranger ? ranger : document;
	if(document.getElementsByClassName){  //判断兼容性
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr = [];
		var all = ranger.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
			if(checkClass(arr[i].className,classname)){ //当前元素的类名  要找的类名
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function checkClass(className,classname){
	var arr = className.split(' ');  //转换成数组
	for(var i=0;i<arr.length;i++){
		if(arr[i] == classname){
			return true;
		}
	}
	return false;
}


//$方便获取指定的元素
//$(select)   //字符串
//$('.one')  $('#one')  $('div')   //字符串
//参数说明
//select  字符串  类似于选择器
//        函数    window.onload   重载
//1.  首字符是.      className  集合  
//2.          #      id         元素
//3.         标签名  tagName   正则(/^[a-z][a-z1-6]{0,7}$/.test(select))
//                              开头 首字符 第二个字符    出现次数 最少0次  最多7次
//规则：以字符开头[a-z]
//charAt

function $(select,ranger){
	if(typeof select == 'string'){
		ranger = ranger || document;
		var first = select.charAt(0);
		if(first == '.'){
			// class
			return getClass(select.substring(1),ranger);
		}else if(first == '#'){
			// id
			return document.getElementById(select.substring(1));
		}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
			// tag
			return ranger.getElementsByTagName(select);
		}
	}else if(typeof select == 'function'){
		window.addEventListener('load',select);
	}
}


////////////////////////////////////////////////////////////////////
function Float(obj){
			this.obj = obj;
			this.maxX = window.innerWidth - this.obj.offsetWidth;
			this.maxY = window.innerHeight - this.obj.offsetHeight;
			// console.log(this.maxY);
			this.speedX = 10;
			this.speedY = 15;
		}
		Float.prototype.stop = function(){
			clearInterval(this.t);
		}
		Float.prototype.resize = function(){
			this.maxX = window.innerWidth - this.obj.offsetWidth;
			this.maxY = window.innerHeight - this.obj.offsetHeight;
		}
		Float.prototype.move = function(){
			let that = this;  //this指向box
			this.t = setInterval(function(){  //t是属性  用箭头函数就能用this
				let lefts = that.obj.offsetLeft + that.speedX;
				let rights = that.obj.offsetTop + that.speedY;
				// console.log(rights);
				if(lefts >= that.maxX){
					lefts = that.maxX;
					that.speedX *=-1;
				}
				else if(rights >= that.maxY){
					rights = that.maxY;
					that.speedY *= -1;
				}
				if(lefts <= 0){
					lefts = 0;
					that.speedX *=-1;
				}
				else if(rights <= 0){
					rights = 0;
					that.speedY *= -1;
				}
				that.obj.style.left = lefts + 'px';
				that.obj.style.top = rights + 'px';
			},60)
		}


//////////////////////////////////////////////////////////////////////
// Children(parent)
// 获取某一个元素的元素节点
function children(parent){
	let newarr = [];
	let childs = parent.childNodes;
	childs.foreach(element =>{
		if(element.nodeType==1){
			newarr.push(element);
		}
	})
	return newarr;
}


//////////////////////////////////////////////////////////////////////
// filter
function children(parent){
	let childs = parent.childNodes;
	let arr = Array.from(childs);
	let newarr = arr.filter(element =>element.nodeType==1);
	return newarr;
}

/////////////////////////////////////////////////////////////////////
//firstElementChild
function firstChild(parent){
	return children(parent)[0];
}

function lastChild(parent){
	let child = children(parent);
	return child(child.length-1);
	// return child.pop();
}


/////////////////////////////////////////////////////////////////////
// 找相邻的元素节点
// next(box,'div')   while
// 1.element 兄弟
// 父元素  childs 从他之后截取 []
// 比较nextAll[i].nodeName  tagname  转大写
// 相等返回nextAll[i]  找不到null

function next(element,tagname){
	let parent = element.parentNode;
	let child = parent.children;
	let index = 0;
	for(let i=0;i<child.length;i++){
		if(child[i]==element){
			index = i;
			break;
		}
	}
	let nextAll = Array.from(child).slice(index+1);
	for(let i=0;i<nextAll.length;i++){
		if(nextAll[i].nodeName == tagname.toUpperCase());
		return nextAll[i];
	}
	return null;
}


///////////////////////////////////////////////////////////////////
//closed(element,'div')  找离他最近的父元素div  while
