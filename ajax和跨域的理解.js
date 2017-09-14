XHR  XMLHttpRequest 

用法

var xhr = new XMLHttpRequest();
xhr.open('get','example.php',false);   //false代表同步  调用open() 不会发送请求 只是启动一个请求以备发送
xhr.send(null)   //发送请求 send() 参数是 要作为请求主体发送的数据  调用send()之后 请求会被分派到服务器

收到请求后
响应数据会自动填充XHR属性

responseText:作为响应主体被返回的文本
responseXML : 如果响应类型是"text/sml"或 "application/xml" 这个属性就会保存响应数据的XML DOM文档
status : 响应的HTTP状态
statusText: HTTP的状态说明

第一步检查status属性 200成功 304表示请求资源没有变，可以直接用浏览器缓存  . 此时responseText已就绪，responseXML也可以访问了

xhr.open('get','example.txt',false)
xhr.send(null)
if((xhr.status>=200 && xhr.status<300) || xhr.status == 304){
	alert(xhr.responseText);
}else{
	alert('request was unsuccessful:' + xhr.status);
}


异步

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		if((xhr.status>=200 && xhr.status<300) || xhr.status == 304){
			alert(xhr.responseText);
		}else{
			alert('request was unsuccessful:' + xhr.status);
		}
	}
}
xhr.open('get','example.txt',true)
xhr.send(null)

xht.abort()可以取消异步请求





跨域 

CORS    IE是XDR    其他XHR   传入绝对URL即可

图像ping  图片src属性可以实现跨域
		单向  
		无法访问服务器的响应文本
		只有get请求 

JSONP
	创建script标签  src属性写地址加函数名   返回 函数名包裹着数据  在页面直接执行
	例：
		function handleResponse(response){
			console.log(response)
		}
		var script = document.createElement("script")
		script.src = "http://freegeoip.net/json/?callback=handleResponse";
		document.body.insertbefore(script,document.body.firstChild);

