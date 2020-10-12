//there is a prototype object for employee function
//employee.prototype
//employee.prototype.__proto__ = Object.prototype
var employee = function (name, id, basicPay, daPay, hraPay) {
    this.name = name;
    this.id = id;
    this.basicPay = basicPay;
    this.daPay = daPay;
    this.hraPay = hraPay;
}
employee.prototype.calculateSalary = function () {
    return this.basicPay + this.daPay + this.hraPay;
}

//there is a prototype object for developer function
//developer.prototype
//developer.prototype.__proto__ = Object.prototype
function developer(name, id, basicPay, daPay, hraPay, incentivePay) {
    employee.call(this, name, id, basicPay, daPay, hraPay);
    this.incentivePay = incentivePay;
    this.calculateSalary = function () {
        var salary = employee.prototype.calculateSalary.apply(this);
        return salary + this.incentivePay;
    }
}

var anilDev = new developer('anil', 'gupta', 1000, 2000, 3000, 4000);

//there is a prototype object for hr function
//hr.prototype
//hr.prototype.__proto__ = Object.prototype
function hr(name, id, basicPay, daPay, hraPay, gratuityPay) {
    employee.call(this, name, id, basicPay, daPay, hraPay);
    this.gratuityPay = gratuityPay;
    this.calculateSalary = function () {
        var salary = employee.prototype.calculateSalary.apply(this);
        return salary + this.gratuityPay;
    }
}

var sunilHr = new hr('sunil', 'kumar', 2000, 3000, 4000, 5000);

var anilSalary = anilDev.calculateSalary();
var sunilSalary = sunilHr.calculateSalary();

console.log(anilSalary);
console.log(sunilSalary)

console.log(window)