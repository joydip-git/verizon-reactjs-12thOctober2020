//var employeeModule = require('./employee')
var { employee } = require('./employee')
class hr extends employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra);
        this.gratuityPay = gratuity;
    }
    calculateSalary() {
        return super.calculateSalary() + this.gratuityPay;
    }
}
module.exports = hr;