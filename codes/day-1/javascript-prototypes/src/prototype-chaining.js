/**
 * 
 *function Object(){ ---> Object.prototype
     this.....
 }
 */

//2. constructor function --> person.prototype
function person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var joydipObj = new person('Joydip', 'Mondal');
//console.log(window.fullName())
var showFn = function () {
    console.log(this)
    return this.firstName;
}
Object.prototype.show = showFn;
console.log(Object.prototype.hasOwnProperty('show'))


//person.prototype.show = function () { return 'show method of joydip' }
console.log(person.prototype.hasOwnProperty('show'))

//joydipObj.show = function () { return 'show method of joydip' }
//console.log(joydipObj.hasOwnProperty('show'))

console.log(joydipObj.show())
//console.log(Object.prototype.show.apply(joydipObj))

//console.log(window.show())


// console.log(Object.prototype)
// console.log(person.prototype)
// console.log(person.prototype.__proto__)
// console.log(joydipObj.__proto__)