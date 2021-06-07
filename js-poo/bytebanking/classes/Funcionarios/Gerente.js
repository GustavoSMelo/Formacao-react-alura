import { Funcionario } from './Funcionario.js'

export class Gerente extends Funcionario {
    constructor (salary, name, cpf) {
        super(salary, name, cpf, 1.1);
    }
}
