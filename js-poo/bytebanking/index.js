import { Cliente } from './classes/Cliente.js';
import { ContaCorrente } from './classes/ContaCorrente.js';
import { ContaPoupanca } from './classes/ContaPoupanca.js';

const client = new Cliente('Gustavo', 123456);
const accountC = new ContaCorrente(3214, client);
const accountP = new ContaPoupanca(0, 3214, client);

console.log(accountC);
console.log(accountP);
