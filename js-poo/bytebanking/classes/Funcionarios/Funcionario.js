export class Funcionario {
    
    #salary;
    #name;
    #CPF;
    #bonificacao;
    #password;

    constructor (salary, name, CPF, bonificacao) {
        this.#CPF = CPF;
        this.#name = name;
        this.#salary = salary;
        this.#bonificacao = bonificacao;

        if(this.constructor == Funcionario) {
            throw new Error('Error, you should not instance this class, because it is abstract ');
        }
    }

    setPassword (password) {
        this.#password = password;
    }

    getPassword () {
        return this.#password;
    }

    auth (pass) {
        return this.getPassword() === pass;
    }

}
