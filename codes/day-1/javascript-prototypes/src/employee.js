class employee {
    constructor(name, id, basicPay, daPay, hraPay) {
        this.name = name;
        this.id = id;
        this.basicPay = basicPay;
        this.daPay = daPay;
        this.hraPay = hraPay;
    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay;
    }
}
var add = (a, b) => (a + b);
//console.log(employee.prototype)
module.exports = {
    employee, //employee:employee
    add
}