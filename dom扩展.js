1. querySelector()   仅返回一个
   
	document.querySelector("body")
	document.querySelector("img.button")
	document.querySelector("#myDiv")
	document.querySelector(".selected")
	
2. querySelectorAll()   返回NodeList实例

3. 与类相关的补充 

	getElementsByClassName()     IE9+
	
	可以传入多个参数  例如 :  getElementsByClassName("username current") 
	
	classList属性
		删除“user类
		
		传统方法 
		
			var classNames = div.className.split(/\s+/)
			var pos;
			for(i = 0 , len = classNames.length;i<len;i++){
				if(classNames[i] == "user"){
					pos = i;
					break;
				}
			}
			
			classNames.splice(pos,1)
			
		新方法    chrome。firefox  不支持ie
		div.classList.remove("user")
		
		div.classList.add("user")
		
		div.classList.toggle("user")
		
		div.classList.contains("user")  返回true，false
		
4. 自定义数据属性 

	<div id = "myDiv" data-appId="12345" data-myname="wangyuliang"></div>
	
	var div = document.getElementById('myDiv')
	
	div.dataset.appId  //取得data-appId
	
	
	
	
5.  innerHtml  和 outerHtml 

	<div id="test">
		<p>1</p>
	</div>
	
	innerHtml 返回  <p>1</p>
	outerHtml 返回 	<div id="test"><p>1</p></div>

6. insertAdjacentHTML()

		beforebegin  向前插入同辈元素
		afterbegin	在第一个子元素之前插入新的子元素
		beforeend	在最后一个子元素之后增加新的子元素
		afterend  向后插入同辈元素

7.提高性能  不要频繁使用innerHtml outerHTML insertAdjacentHTML    建议一次性加入

	