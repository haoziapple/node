`use strict`;

console.log('Hello World');

var s = "Hello";

function greet(name) {
	console.log(s+','+name+'!');
}

function hello() {
	console.log('Hello World!!!');
}

// 三种导出方法
module.exports=greet;

// module.exports = {
//     hello: hello,
//     greet: greet
// };

// exports.hello = hello;
// exports.greet = greet;