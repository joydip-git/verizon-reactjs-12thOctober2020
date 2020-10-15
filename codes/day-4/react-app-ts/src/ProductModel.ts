export interface ProductModel {
    id: number;
    name: string;
    price: number
}

export class Product implements ProductModel {
    public id: number;
    public name: string;
    public price: number;
    constructor(pid: number, pname: string, pprice: number) {
        this.id = pid;
        this.name = pname;
        this.price = pprice;
    }

    public print(): string {
        return this.name + ' ' + this.price;
    }
}

const add = (x: number, y: number): number => (x + y);
const multi = (a: number, b: number, c: number): number => (a + b + c);

const calculate = (
    operation: (a: number, b: number) => number,
    ...args: number[]): number => {
    return operation(args[0], args[1]);
}
calculate(add, 10, 20)
calculate(multi, 10, 20, 30);

//dynamic and static
//TS,





