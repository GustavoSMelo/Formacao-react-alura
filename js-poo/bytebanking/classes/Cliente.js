import { ContaCorrente } from "./Contas/ContaCorrente.js";

export class Cliente {

    name;
    #CPF;
    #ContaCorrente;

    constructor (name, cpf) {
        this.name = name;
        this.#CPF = cpf;
    }

    getCPF (cpf) {
        return this.#CPF;
    }

    setContaCorrente (conta) {
        if (conta instanceof ContaCorrente) {
            this.#ContaCorrente = conta;
        }
    }

    getContaCorrente () {
        return this.#ContaCorrente;
    }

    show () {

        const log = {
            name: this.name,
            CPF: this.getCPF(),
            ContaCorrente: this.getContaCorrente().showInfo(),
        }

        console.log(log);
    }

}
