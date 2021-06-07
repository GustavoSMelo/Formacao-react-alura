export class Conta {
    //attributes
    static accountCounter = 0;
    _balance;
    _agency;
    _client;

    constructor (initialBalance, agency, client) {
        this._balance = initialBalance;
        this._agency = agency;
        this._client = client;
        Conta.accountCounter++;
                                                 
        if (this.constructor == Conta) {
            throw new Error('You should not start a object of this class ');
        }

    }  

    //getters
    getBalance () {
        return this._balance;
    }

    getAgency () {
        return this._agency;
    }

    getClient () {
        return this._client;
    }

    // setters
    setBalance (balance) {
        this._balance = balance; 
    }

    setAgency (agency) {
        this._agency = agency;
    }

    setClient (client) {
        this._client = client;
    }

    //methods
    deposit (money = 0) {
        if(money <= 0) {
            console.error('Error, this value is invalid to deposit in your balance ');
        } else {
            this._balance += money;
        }
    }

    withdraw (money = 0) {

        if (money >= this._balance) {
            console.error(`Error, your balance is slower than ${money}, actually, you have ${this._balance}R$ `);

            return 0;
        } else {
            this._balance -= money;
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

    // show counter
    LenghtOfAccounts () {
        return Conta.accountCounter;
    }
}
