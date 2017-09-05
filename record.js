Object.defineProperty()
Object.defineProperties()
Object.getOwnPropertyDescriptor()
constructor
instanceof
call
apply
Person.prototype.constructor === Person
isPrototypeOf()
getPrototypeOf()
hasOwnProperty()
[[prototype]]
__proto__

如何判断某个属性是存在于对象中还是原型中
function hasPrototypeProperty(Object,name){ 
	return !Object.hasOwnProperty(name) && (name in Object)
}

Object.keys() 可枚举的实例属性
Object.getOwnPropertyNames() 所有实例属性

原型链
Subtype.prototype = new Supertype()
继承是通过创建Supertype的实例，并将该实例赋给Subtype.prototype实现的
Object.create()  
	||
function object(o){
	function F(){};
	F.prototype = o;
	return new F();
}

组合模式
原型链继承方法 
构造函数继承属性

function SuperType(name){
	this.name = name;
	this.colors = ["blcck","white"];
}
SuperType.prototype.sayName = function(){
	console.log(this.name)
}
function SubType(name,age){
	SuperType.call(this,name);
	this.age = age;
}
inheritPrototype(SubType,SuperType);

SubType.prototype.sayAge = function(){
	console.log(this.age);
}

function object(o){
	function F(){};
	F.prototype = o;
	return new F();
}
function inheritPrototype(SubType,SuperType){
	var prototype = object(SuperType.prototype);
	prototype.constructor = SubType;
	SubType.prototype = prototype;
}

递归
function factorial(n){
    if(n<=1){
        return 1;
    }else{
        return n * arguments.callee(n-1);
    }
}
闭包
指 有权访问另一个函数作用域中的变量的函数
//闭包副作用
function createFunctions(){
    var funcArr = [];
    for(var i = 0;i<10;i++){
        funcArr[i] = function(i){
            return i ;
        }
    }
    return funcArr;
}
//解决此问题
function createFunctions(){
    var funcArr = [];
    for(var i = 0;i<10;i++){
        funcArr[i] = function(num){
            return function(){
                return num;
            }
        }(i)
    }
    return funcArr;
}
//模块模式 单例模式

var singleton = function(){
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }
    return{
        publicProperty:true,
        publicMethod:function(){
            privateVariable++;
            return privateFunction();
        }
    }
}();
//增强的模块模式
var singleton = function(){
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }
    var object = new CustomType();  //适用于单例必须是某种类型的实例
    object.publicProperty = true;
    object.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    }
    return object;
}();