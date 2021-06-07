import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    constructor (agency, client) {
        super(0, agency, client);
    }
}
