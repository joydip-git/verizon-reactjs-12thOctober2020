//2. 
//1. Object literal syntax
var joydipObjectRef = {
    //__proto__:Object.prototype
    //value properties
    firstName: 'Joydip',
    lastName: 'mondal',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

// var firstName = joydipObjectRef['firstName']
// console.log(firstName)
var info = joydipObjectRef.fullName();
console.log(info)

joydipObjectRef.location = 'bangalore';

for (var propertyName in joydipObjectRef) {
    var propertyValue = joydipObjectRef[propertyName]
    console.log(propertyName + ': ' + propertyValue)
}

console.log(joydipObjectRef.__proto__)


