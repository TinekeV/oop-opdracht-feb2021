// Export your class here as module.exports = MyClass

class BusinessAccount {
    constructor(name, balance, creditLimit, sepaPermission) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.sepaPermission = sepaPermission;
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
        if (withdrawal >= 20000) {
            return this.balance
        } else {
            this.balance = this.balance - withdrawal;
        }
    };
    sepaInvoice() {

    }
}

new BusinessAccount()

module.exports = BusinessAccount;
