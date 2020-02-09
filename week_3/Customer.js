 module.exports = class Customer {

    constructor(name) {
        this.name = name
    }

    getInstanceName() {
        return this.name
    }

    static create(name) {
        return new Customer(name)
    }
}
