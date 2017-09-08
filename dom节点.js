节点关系
nodeList对象 （类数组对象）
子节点  childNodes     取法 ：  someNode.childNodes[0]     someNode.childNodes.item(0)

第一个子节点：someNode.firstChild = someNode.childNodes[0]

第二个子节点：someNode.lastChild = someNode.childNodes[someNode.childNodes.length-1]

前一个同胞节点: someNode.previousSibling

后一个同胞节点: someNode.nextSibling

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
	