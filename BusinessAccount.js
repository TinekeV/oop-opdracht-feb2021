// Export your class here as module.exports = MyClass

class MyClass {
    constructor(name, balance, creditLimit, sepaPermission) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.sepaPermission = sepaPermission;
    }
}

new MyClass()

module.exports = MyClass;
