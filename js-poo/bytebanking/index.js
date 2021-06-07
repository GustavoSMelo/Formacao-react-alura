import { Gerente } from './classes/Funcionarios/Gerente.js';
import { Auth } from './classes/Auth.js';

const gerente = new Gerente(8000, 'Gustavo', 1231236);

gerente.setPassword('5123');

console.log(Auth.login(gerente, '5123'));
