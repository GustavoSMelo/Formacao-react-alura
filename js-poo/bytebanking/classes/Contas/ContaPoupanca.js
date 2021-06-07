import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor (initialBalance, agency, client) {
        super(initialBalance, agency, client);
    }

    withdraw (money) {
        const rate = money * 1.02;
        super.withdraw(rate);
    } 
}
