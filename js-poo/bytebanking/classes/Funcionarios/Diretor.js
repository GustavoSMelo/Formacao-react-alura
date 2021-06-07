import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor (salary, name, cpf) {
        super(salary, name, cpf, 2);
    }
}
