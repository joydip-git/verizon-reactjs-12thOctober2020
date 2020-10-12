function employee(name, id, basicPay, daPay, hraPay) {
    this.name = name;
    this.id = id;
    this.basicPay = basicPay;
    this.daPay = daPay;
    this.hraPay = hraPay;
    this.calculateSalary = function () {
        return this.basicPay + this.daPay + this.hraPay;
    }
}

function developer(name, id, basicPay, daPay, hraPay, incentivePay) {
    this.name = name;
    this.id = id;
    this.basicPay = basicPay;
    this.daPay = daPay;
    this.hraPay = hraPay;
    this.incentivePay = incentivePay;
    this.calculateSalary = function () {
        return this.basicPay + this.daPay + this.hraPay + this.incentivePay;
    }
}

function hr(name, id, basicPay, daPay, hraPay, gratuityPay) {
    this.name = name;
    this.id = id;
    this.basicPay = basicPay;
    this.daPay = daPay;
    this.hraPay = hraPay;
    this.gratuityPay = gratuityPay;
    this.calculateSalary = function () {
        return this.basicPay + this.daPay + this.hraPay + this.gratuityPay;
    }
}