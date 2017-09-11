IE  事件冒泡
网景  事件捕获

dom2 事件流    三个阶段   事件捕获，处于目标，事件冒泡   

事件处理程序 

1.html事件处理 
	<buttom onclick="alert(1)"></button>
	缺点：1.时差问题。如果用户在页面解析函数之前点击了按钮，会报错
		  2.代码耦合

2.dom0级处理
	var btn = document.getElementById('myBtn')
	btn.onclick = function(){alert(1);}
	
	btn.onclick = null;  //删除事件
	
	缺点  不能重复注册事件
	
3. dom2级事件处理
    var btn = document.getElementById("myBtn")
	function handler(){alert(1)}
	btn.addEventListener('click',handler,false);     //false表示在冒泡阶段发生事件  
	btn.removeEventListener('click',handler,false);
	
	IE:   ！！！！！！作用域是全局
	btn.attachEvent('click',handler);   //默认是冒泡阶段
	btn.detachEvent('click',handler); 