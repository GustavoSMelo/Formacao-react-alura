import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor (client, agency) {
        super(0,agency, client);
    }

    withdraw (money) {
        const rate = money * 1.01;
        super.withdraw(rate);
    }
}
