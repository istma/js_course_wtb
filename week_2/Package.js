module.exports = class Package {
    constructor(name, recipient) {
        this.name = name
        this.customer_who_bought = recipient
    }
}
