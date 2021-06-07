import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor (initialBalance, agency, client) {
        super(initialBalance, agency, client);
    }
}
