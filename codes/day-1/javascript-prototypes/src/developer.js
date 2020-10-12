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