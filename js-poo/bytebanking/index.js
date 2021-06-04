import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const client = new Cliente('Gustavo', 3245);
const client2 = new Cliente('Geovana', 6524);

const account = new ContaCorrente(4023);
const account2 = new ContaCorrente(3520);

client.setContaCorrente(account);
client2.setContaCorrente(account2);

client.show();
/*
setTimeout(() => {
    client.ContaCorrente.deposit(100);
    client.show();
    const valorSacadoErrado = client.ContaCorrente.withdraw(150);

    console.log(' ');
    console.log(valorSacadoErrado);
    console.log(' ');

    const valorSacado = client.ContaCorrente.withdraw(50);
    client.show();

    console.log(valorSacado);
}, 4000);
*/

client.getContaCorrente().deposit(100);
client.getContaCorrente().transfer(80, client2);

client.show();
console.log(' ');
client2.show();

console.log(`\nNumero de contas abertas: ${ContaCorrente.accountCounter}`)
