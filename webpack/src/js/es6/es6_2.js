//es6 ,let,const


/*
1.块级作用域

{


	
let count=10;

console.log(count);
	
}*/

//var count=20;
//console.log(count);

/*
2.变量不提升
变量提升
*/
/*
function fn() {

   alert(count);
	
   let count=20;

}

fn();*/

/*
 const定义常量 
*/
/*
const count=10;
count=20;
alert(count);*/


/*
 解构赋值 
*/

//var a=10,b=20,c=30;

/*var [a,,c]=[10,20,30];
let [,,third] = ["foo", "bar", "baz"];
var obj={
	name:"1505FE.B",
	zhuanye:"前端",
	salary:"20k"
}

var str="welcome to china";

var {name:mingzi,salary:xizi}=obj;

var [a1,a2,a3,a4]=str;

console.log(a1);
console.log(a2);*/

/*
  增强的对象字面量  ｛  ｝
*/

/*var obj={	
	id:1001,
	name:"ipad",
	price:3000,
	say:function() {
	   return "hi,我叫"+this.name
	}
}

console.log(obj.say());*/

/*function fn() {
	var id=1001,name="ipad",price=3000;
	
	//中间做了逻辑操作	
	return {id,name,price}
	
	
}

var {name,price}=fn();
alert(name);
alert(price);*/


/*
var id=1009,name="ipad3",price=5000;
var obj={	
	   id,  
	   name,  
	   price,
	   say() {
	      console.log("hi,"+this.name)
	   }

}
 
console.log(obj.say());
*/

/*
  对象与对象能继承
*/

/*
var parent={
	    name:"人类",
	    say(name) {
			this.name=name;
			console.log("hi"+this.name);
		}
	   
}

//console.log(parent.say())

var child={
	__proto__:parent,
	age:20,
	go() {
		console.log(this.name+"会开车");
	}
}

child.say('1505FE.B')
child.go()
*/


/*
  模板字符串  `  `
*/

/*
var obj={	
	id:1001,
	name:"ipad",
	price:3000,
	say:function() {
	   return "hi,我叫"+this.name
	}
}

var {name,price,say}=obj;

var str=`
<li>商品名称：${name},
价格：${price+1000},我可以被招待，
${ say.call(obj) }
`

var odiv=document.createElement('div');
odiv.innerHTML=str;

document.body.appendChild(odiv)

//console.log(str)
*/

/*
  rest用法
*/

/*function sum(txt,num,...arr) {
	
	console.log(arr);
	
	var result=0;
	
	for(var i=0,len=arr.length;i<len;i++) {		
		result+=arr[i];	
	}	
	return txt+result;
	
	
}

console.log(sum("求和:",5,6,7,8,8,89));*/

/*
  展开操作符 ...
*/

/*
var arr1=[5,6,7,8,8,89];
var arr2=["hello","1505FE.B"];

var newArr=[...arr1,...arr2]

console.log(newArr.length);

function sum(txt,...arr) {
	
	console.log(arr);
	
	var result=0;
	
	for(var i=0,len=arr.length;i<len;i++) {		
		result+=arr[i];	
	}	
	return txt+result;	
	
}

//console.log(sum("求和:",...arr1));
*/


/*
   default：函数形参默认值 
*/


/* 
ES5写法
function StudentInfo(name,age,address) {  
	 
	 this.name=name || "1505Fe.B";
	 this.age=age || 3;
	 this.address=address || "海淀";
	 
	 
 }*/


 /*function StudentInfo(name="1505Fe.B",age=3,address="海淀") { 
	 
	 this.name=name;
	 this.age=age;
	 this.address=address;
	 
	// return {name,age,address}
	 
	     
	 
	 
 }

var st=new StudentInfo();

console.log(st.name);
console.log(st.age);
console.log(st.address);
*/


/*
  for,for in ,for of(ES6),forEach,map
*/

var arr=[6,7,8,8,89,"hello","1505FE.B"];

arr.name="网站工程";

//console.log("数量:"+arr.length);
/*
var obj={	
	id:1001,
	name:"ipad",
	price:3000,
	say:function() {
	   return "hi,我叫"+this.name
	}
}

console.log("数量:"+obj.length)*/

/*var obj={	
	id:1001,
	name:"ipad",
	price:3000
}

for(var item of obj ) {
	console.log(item);
}*/


/*
arr.forEach((value,key)=>{
	console.log(value);
});
*/


/*
arr.map((value,key)=>{
	console.log(key);
});
*/



/*
var obj={	
	id:1001,
	name:"ipad",
	price:3000,
	say() {	 
		console.log(this)
		var _this=this;
		setTimeout(function() {
			
			console.log(_this.name);	
		},1000);
	}
}

obj.say();
*/

/*

var obj={	
	id:1001,
	name:"ipad",
	price:3000,
	say() {
		setTimeout(()=>{
			console.log(this);
		    console.log(this.name);	
		},1000);
	}
}

obj.say();
*/

/*
function fn() {
  this.name=""
}

fn.prototype={
    say:function*) {
	
	}

}


var test=new fn()
*/



/*
   ES6中的面向对象  class,extends,super,this,constructor
*/

//定义父类

class Parent {	
	
	//相当于构造函数本身
	constructor(name="1505FE.B") {
		this.name=name;	
	}
	
	say() {
	   console.log(`hi,${this.name}`)
	}


}

/*
var p1=new Parent('网站工程');

p1.say();*/

//定义子类

class Child extends Parent {   
	constructor(name="小明") {
	    super(name); //调用父类
	}

	go() {
		console.log(`${this.name}马上步入职场啦`);
	}

}

var p2=new Child('农夫');

p2.go();
p2.say();















































