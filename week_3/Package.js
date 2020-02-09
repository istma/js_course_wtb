module.exports = class Package {
    constructor(name, recipient) {
        this.name = name
        this.customer_who_bought = recipient
    }
    static create(name, recipient) {
        return new Package(name, recipient)
    }
}
