//var employeeModule = require('./employee')
//var employeeModule = { employee: employee, add: add}

var { employee, add } = require('./employee')

// class developer extends employeeModule.employee {
class developer extends employee {
    constructor(name, id, basicPay, daPay, hraPay, incentivePay) {
        super(name, id, basicPay, daPay, hraPay);
        this.incentivePay = incentivePay;

    }
    calculateSalary() {
        var salary = super.calculateSalary();
        return salary + this.incentivePay;
    }
}
var res = add(10, 20);
console.log(res)

module.exports = {
    developer //developer:developer
}