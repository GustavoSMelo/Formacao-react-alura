import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    constructor (agency, client) {
        super(0, agency, client);
    }

    //sobreescrevendo
    withdraw (money) {
        const rate = 1.1 * money;
        super.withdraw();
    }
}
