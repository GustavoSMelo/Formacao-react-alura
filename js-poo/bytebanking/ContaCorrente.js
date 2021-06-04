export class ContaCorrente {

    static accountCounter = 0;
    agency;

    #balance = 0;

    constructor (agency) {
        this.agency = agency;
        ContaCorrente.accountCounter++;
    }

    get balance () {
        return this.#balance;
    }

    deposit (money = 0) {
        if(money <= 0) {
            console.error('Error, this value is invalid to deposit in your balance ');
        } else {
            this.#balance += money;
        }
    }

    withdraw (money = 0) {

        if (money > this.#balance) {
            console.error(`Error, your balance is slower than ${money}, actually, you have ${this.#balance}R$ `);

            return 0;
        } else {
            this.#balance -= money;
            console.log('withdrawed with success ');

            return money;
        }

    }

    transfer (money, user) {

        if (money <= 0) {
            console.error('Error, negative numbers is not valid ');
        } else {
            user.getContaCorrente().deposit(money);
            this.withdraw(money);

            console.log(`Money transfer to ${user.name} with success `);
        }

    }

    showInfo () {
        return {
            balance: this.balance,
            agency: this.agency
        }
    }
}
