1.动态脚本

function loadScript(code){
	var script = document.createElement("script");
	
	try{
		script.appendChild(document.createTextNode(code))
	}catch(ex){
		script.text = code
	}
	
	document.body.appendChild(script)
}

调用：loadScript("function sayHi(){alert('hi');}")

2.动态css
第一种:
<link type="text/css" rel="stylesheet" href="style.css">
第二种：
	var link = document.createElement("link")
	link.rel = "stylesheet"
	link.type = "text/css"
	link.href = "style.css"
	
	var head = document.getElementsByTagName("head")[0]
	head.appendChild(link)
第三种：
<style type="text/css">

</style>



理解dom的关键，就是理解dom对性能的影响。dom操作往往是javascript程序中开销最大的部分
NodeList对象都是”动态“的 ，这就意味着每次访问NodeList对象，都会运行一次查询。
鉴于此，最好的办法就是尽量减少dom操作