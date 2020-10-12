//IIFE (iify): Imeediately invocable function expression
/*
(function () {
    var anilDev = new developer('anil', 'gupta', 1000, 2000, 3000, 4000);
    var sunilHr = new hr('sunil', 'kumar', 2000, 3000, 4000, 5000);
    console.log(anilDev.calculateSalary())
    console.log(sunilHr.calculateSalary())
})();
    // console.log(anilDev.__proto__)
    // console.log(sunilHr.__proto__)
    */

var { developer } = require('./developer');//{developer:developer}
var hr = require('./hr');//hr

var anilDev = new developer('anil', 'gupta', 1000, 2000, 3000, 4000);
var sunilHr = new hr('sunil', 'kumar', 2000, 3000, 4000, 5000);

console.log(anilDev.calculateSalary())
console.log(sunilHr.calculateSalary())

var joydip = {
    name: 'joy',
    age: 20,
    info: function () {
        return this.name + ' ' + this.age
    }
}

//object destructuring
var { name, age } = joydip;
console.log(name)
console.log(age)
//console.log(joydip.info());


