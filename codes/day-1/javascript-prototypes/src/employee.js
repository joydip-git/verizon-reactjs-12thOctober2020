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
//console.log(employee.prototype)