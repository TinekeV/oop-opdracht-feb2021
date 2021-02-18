// Export your class here as module.exports = MyClass

class Account {
    constructor(name, balance, creditLimit) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
    }
    makeDeposit(deposit) {
        if (deposit > 0) {
            this.balance = this.balance + deposit;
        }
    };
    makeWithdrawal(withdrawal) {
        if (withdrawal > this.balance && withdrawal > this.creditLimit) {
            return this.balance;
        }
        if (withdrawal >= 5000) {
            return this.balance
        } else {
            this.balance = this.balance - withdrawal;
        };

    };

}

new Account()

module.exports = Account;
