相同点：
	
	都接受1或者2个参数

	都返回被操作符的一个子字符串

	第一个参数都是起始位置
	
	不会修改字符串
	
	如果没有传入第二个参数，则将字符串长度作为‘结束位置’
	
不同点:

	slice() substring() 的第二个参数指定的是子字符串的最后位置
	substr() 第二个参数指定子字符串的字符个数
	
举例：
	var hello = "hello world"
	
	hello.slice(3)    //lo world
	hello.substring(3)	//lo world
	hello.substr(3)  //lo world
	
	hello.slice(3,7)    //lo w
	hello.substring(3,7)  //lo w
	hello.substr(3,7)    //lo wor
	
	
参数为负值的情况

slice() 将所有传入负值参数与字符串长度相加
substr() 将第一个负参数加上字符串长度   第二个负参数变为0
substring() 将所有负值参数转换成0

	var hello = "hello world"

	hello.slice(-3)    ----> hello.slice(8)      // "rld"
	hello.substring(-3)   ----->hello.substring(0)  //"hello world"
	hello.substr(-3)    ------>hello.substr(8)   //"rld"
	
	hello.slice(3,-4)   ----->hello.slice(3,7) // "lo w"
	hello.substring(3,-4)   ------>hello.substring(3,0)    ----->hello.substring(0,3)   //"hel"
	hello.substr(3,-4)    ------->hello.substr(3,0)   ----> //  返回""
	
	
	
substring()   第一个参数大于第二个参数  会交换位置 

slice()  第一个参数大于第二个参数   返回""