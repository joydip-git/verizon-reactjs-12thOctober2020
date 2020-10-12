/*
//console.log(a)
//var a;
a = 40;
console.log(a)

//console.log(x)
let x;
x = 20;
for (let i = 0; i < 2; i++) {
    //console.log(x)
    let x = 30;
    console.log(x)
}
console.log(x)
//window.x = 30;

 * globalContextObj = { *
 * x:undefined,
 * fn: for...x=undefined *
 * }
 

 * globalContextObj = {
 * a:40
 * x:30,
 * fn: for... *
 * }
 
//console.log(global)

 * x=20
 * 


const y = 20;
console.log(y)
//  y = 30;
//  console.log(y)
const arr = [10, 20]
console.log(arr)
//arr = [];
arr.push(40);
arr[0] = 100
console.log(arr)

//4.
const obj = Object.create({}); //obj={__proto__}
obj.name = 'joy';
obj.age = 20;
obj.print = function () {
    return this.name + ' ' + this.age;
}
for (let propName in obj) {
    console.log(propName + ': ' + obj[propName])
}
console.log(obj.print())

const personRef = {
    name: 'person',
    age: 40,
    location: 'bng'
}
var copyObj = { ...personRef };
console.log(copyObj)
console.log(copyObj === personRef)

const numbers1 = [1, 2, 3, 4]
const numbers2 = [10, 20, 30, 40]
const copyOfNumbers = [...numbers1, 100, 200, ...numbers2]
console.log(copyOfNumbers)
console.log(numbers1 === copyOfNumbers)
*/
const add = (a, b) => (a + b);

const subtract = (a, b) => (a - b);
const multi = (a, b, c) => (a * b * c);

//optional argument and default value
const invokeOperation = (operation, num1, num2 = 0, num3 = 0) => {
    console.log(num1)
    console.log(num2)
    console.log(num3)
    return operation(num1, num3);
}
// const invokeOperation = (operation, ...args) => {
//     //console.log(operation.arguments)
//     return operation(args[0], args[1]);
// }
console.log(invokeOperation(add, 10, 30));


