节点关系
10.1.1   Node类型
nodeList对象 （类数组对象）
子节点  childNodes     取法 ：  someNode.childNodes[0]     someNode.childNodes.item(0)

第一个子节点：someNode.firstChild = someNode.childNodes[0]

第二个子节点：someNode.lastChild = someNode.childNodes[someNode.childNodes.length-1]

前一个同胞节点: someNode.previousSibling

后一个同胞节点: someNode.nextSibling

父节点： someNode.parentNode

someNode.hasChildNodes() 在节点有子节点时返回true


操作节点 
--------父节点所拥有的方法

appendChild()

示例
	var returnNode = someNode.appendChild(newNode);
	console.log(returnNode == newNode)  //true
	console.log(sonmeNode.lastChild == newNode) //true

insertBefore() 两个参数:要插入的节点，作为参照的节点 ，插入节点后，被插入的节点变为参照节点的priviousSibling，同时被方法返回
	
示例
	//插入成为最后一个子节点  参照节点为null
	returnNode = someNode.insertBefore(newNode,null)   //newNode === someNode.lastChild
	//插入成为第一个子节点
	returnNode = someNode.insertBefore(newNode,someNode.firstChild)  //newNode === someNode.firstChild
	//插入到最后一个子节点的前面
	returnNode = someNode.insertBefore(newNode,someNode.lastChild)  //newNode === someNode.childNodes[someNode.childNodes.length-2]

replaceChild()  两个参数：要插入的节点，要替换的节点

	//替换第一个节点
	returnNode = someNode.replaceChild(newNode,someNode.firstChild)
	
removeChild() 

	//移除第一个子节点
	returnNode = someNode.removeChild(someNode.firstChild)

replaceChild()和removeChild()移除的节点 仍然在文档中，只是在文档中没有了自己的位置

--------所有节点拥有的方法

cloneNode() 接收一个参数  true:深复制，复制节点及整个子节点树    false:浅复制，只复制该节点本身

	<ul id="ul">
		<li>1</li>
		<li>1</li>
		<li>1</li>
	</ul>

	var myList = document.getElementById('ul')
	
	var deepList = myList.cloneNode(ture)   // deepList.childNodes.length === 3

	var shallowList = myList.cloneNode(false)  // shallowList.childNodes.length === 0

normaLize()   //处理空白文本节点 连续文本节点
 

	



arguments对象转换成数组 （IE8以上版本）
	var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);

兼容性写法

function convertToArray(nodes){
	var array = null;
	try{
		array = Array.prototype.slice.call(nodes,0);
	}catch(ex){
		array = new Array();
		for(var i = 0;i<nodes.length;i++){
			array.push(nodes[i]);
		}
	}
	return array;
}


10.1.2  Document类型

	document对象代表整个HTML页面
	
	
	var html = document.documentElement  //取得对<html>的引用
		html === document.childNodes[0]
		html === document.firstChild
	
	var body = document.body //取得对<body>的引用
	var doctype = document.doctype  //取得对<!DOCTYPE>的引用
	
	var title = document.title //取得文档标题
	document.title = "hahah"  //设置文档标题
	
	var url = document.URL   //取得完成的URL
	
	var domain = document.domain //取得域名  可设置为域名   例如 域名为 p2p.wrox.com  可以改为wrox.com  可以通过此方法进行通信
	
	var referrer = document.referrer //取得来源页面的URL
	
	--------document.getElementById()   没有则返回null 有只返回一个元素
	--------document.getElementsByTagName()   
				返回	HTMLcollection对象 
				var images = document.getElementsByTagName("img")
				images.length  
				images.item(0).src
				images[0].src
				
				HTMLcollection对象 有namedItem()方法 传入name属性值 即可拿到
	特殊集合
	
	document.anchors     //有name属性的<a>标签
	document.forms       //所有<form>元素
	document.images      //所有图片
	document.links       //所有带有href的<a>
	
	----------dom一致性检测
			document.implementation.hasFeature("功能名","版本号")
				
10.1.3 Element类型

	<div id="myDiv"></div>
	var div = document.getElementById('myDiv')
	div.tagName == div.nodeName
	
	if(div.tagName.toLowerCase() === "div")  //用于判断是否是div标签
	
	-------div.getAttribute('id')  //获得id属性    div.id也可以
	获取元素的属性直接用element.id  element.className
	
	-------div.setAttribute("id","haha")
	-------div.removeAttribute("id")
	
	var div = document.createElement("div")    //创建div
	div.id = "myNewDiv"
	div.className = "box"
	
	用appendChild() replaceChild() insertBefore() 添加该节点
	
10.1.4  Text类型
	var element = document.createElement("div")
	element.className = "message"
	var textNode = document.createTextNode("hello world")  //创建文本节点  var textNode = document.createTextNode("<strong>Hello</strong>World!") 可以加标签
	element.appendChild(textNode)
	document.body.appendChild(element)
			
	element.normalize()  合并所有文本节点为一个
	element.firstChild.splitText(5)  从位置5开始 分割成两个节点
 	
10.1.8 documentFragment类型 

	此类型用来保存节点
	举例  
	var fragment = document.createDocumentFragment()
	var ul = document.getElementById("myList")
	var li = null
	for(var i = 0;i<3;i++){
		li = document.createElement("li")
		li.appendChild(document.createTextNode("item:"+i))
		fragment.appendChild(li)
	}
	ul.appendChild(fragment)
	
		
	