// const fs = require('fs');
// const { Console } = require('console');
// const output = fs.createWriteStream('./week_3_report.log');
// const logger = new Console ({ stdout: output });
var logger = require('./logger/logger').createLogger('./week_3_report.log');
logger.setLevel('debug')


module.exports = class DeliveryGuy {
    constructor(name) {
        this.name = name
        this.customers_to_serve = []
        this.packages_to_deliver = []
    }

    assignPackage(package_del) {
        this.packages_to_deliver.push(package_del)
        logger.info('Delivery guy ' + this.name +  ' was assigned ' + package_del.name)
    }

    serveCustomer(customer) {
        this.customers_to_serve.push(customer)
        logger.info('Delivery guy ' + this.name +  ' serves ' + customer.name)
    }

    static create({name}) {
        return new DeliveryGuy(name)
    }
}
