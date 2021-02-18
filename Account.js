// Export your class here as module.exports = MyClass

class MyClass {
    constructor(name, balance, creditLimit) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
    }
}

new MyClass()

module.exports = MyClass;
