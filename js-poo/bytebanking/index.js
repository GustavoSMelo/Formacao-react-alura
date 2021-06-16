import { Gerente } from './classes/Funcionarios/Gerente.js';
import { Auth } from './classes/Auth.js';
import { Cliente } from './classes/Cliente.js';
import { ContaCorrente } from './classes/Contas/ContaCorrente.js';

const gerente = new Gerente(8000, 'Gustavo', 1231236);
const client = new Cliente('Gustavo', 1235654);

gerente.setPassword('5123');

console.log(Auth.login(gerente, '6462'));
console.log(Auth.login(client, '36520'));