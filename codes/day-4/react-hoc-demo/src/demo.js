/*
function person(name) {
    this.name = name;
}
person.prototype.show = function () { }
function address(location, pincode) {
    this.location = location;
    this.pincode = pincode;
}
address.prototype.print = function () {

}
function trainer(name, subjectToTeach, loc, pin) {
    person.call(this, name);
    address.call(this, loc, pin)
    //this.__proto__.
    this.subjectToTeach = subjectToTeach;
}
Object.setPrototypeOf(trainer.prototype, person.prototype)
var joy = new trainer('joy', 'react', 'bng', 100)
joy.show();
//__proto__:person.prototype/address.prototype

class Person {

}
class Address {

}
class Trainer extends Person, Address {
    constructor(){
        super()
    }
}
var t = new Trainer();
*/
let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}
Object.assign(User.prototype, sayHiMixin);
console.log(User.prototype)
var joyUser = new User('joy');
joyUser.sayHi();
joyUser.sayBye();

