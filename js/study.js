'use strict'
alert('hello,world');
//var x = 1;
//'hello,world';
//var x = 1;
//var y = 2;
//if(2 > 1){
//	x = 1;
//	y = 2;
//	z = 3;
//}
////alert(x);
//alert(y);
//alert(z);
//var a = 1+2;
//var b = (1 + 2 +3 + 4 + 5)/2;
//alert(a);
//alert(b);
//var arr = [1,2,3.14,'hello,world'];
////for (var i = 0; i<arr.Counter();i++){
//	alert(arr);
////}
// 对象
//var person = {
//	name:'bob',
//	age:20,
//	tags:['js','web','mobile'],
//	city:'shanghai',
//	hasCar:true,
//	zipcode:null	
//};
//
//alert(person);
//alert(person.name);
// 变量
//var a; // 申明了变量a ,此时a的值为undefined
//var $b = 1;// 申明了变量$b ,同时给$b赋值,此时$b的值为1
//var s_007 = '007'; // s_007 是一个字符串
//var answer = true; // answer 是一个布尔值 值true
//var t = null; // t的值是null

//
//var a = 123; // a 的值是整数123
// a = 'abc'; // a 变为字符串
// alert(a);
  // int b = 123;
// b = 'abc'; // 错误: 不能把字符串赋给整形变量
 //  alert(b);//
//var name = '小明';
//var age = 20;
//var message = '你好,' + name + ',你今年' + age + '岁了!';
//alert(message);
//var s = 'hello';
//alert(s);
//var S = s.toUpperCase(); // 变成大写
//alert(S);
//
//s.indexOf('ll');
//alert(s.indexOf('ll'));
//var z = s.substring(0,4);
//alert(z);
//
//var arr = [1,2,3];
//arr.length;
//alert(arr.length);
//
// for 循环
//var x = 0;
//var i; 
//for(i = 1; i<=3;i++){
//	x = x+i;
//}
//alert(x);

//var arr = ['apple','goole','nucrisifet'];
//var i,x;
//for (i = 0;i<arr.length;i++) {
//	x = arr[i];
//	alert(x);
//}
// for ... in 用 hasOwnProperty()来过滤掉对象继承的属性
//var o = {
//	name:'jack',
//	age:20,
//	city:'beijing'
//};
//for(var key in o){
//	if(o.hasOwnProperty(key)){
//		alert(key);
//	}
//}

//var a = ['a','b','c'];
//for(var i in a){
//	alert(i);
//	alert(a[i]);
//}

//while 循环
//var x = 0;
//var n = 9;
//while(n>0){
//	x = x + n;
//	n = n - 2;
//}
//alert(x);
// Map 和 Set
// map 是一组键值对的结构,具有几块的查找速度


var names = ['michael','bob','tracy'];
var scores = [95,75,85];

var m = new Map([['michael',95],['bob',,75],['tracy',85]]);
//m.get('michel');
alert(m.get('michael'));
