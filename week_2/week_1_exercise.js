/* EXERCISE */

const fs = require('fs');
const { Console } = require('console');
const output = fs.createWriteStream('./week_1_report.log');
const logger = new Console ({ stdout: output });

Customer = class {
    constructor(name) {
        this.name = name
    }
}

DeliveryGuy = class {
    constructor(name) {
        this.name = name
        this.customers_to_serve = []
        this.packages_to_deliver = []
    }

    assignPackage(package_del) {
        this.packages_to_deliver.push(package_del)
        logger.log('Delivery guy ' + this.name +  ' was assigned ' + package_del.name)
    }

    serveCustomer(customer) {
        this.customers_to_serve.push(customer)
        logger.log('Delivery guy ' + this.name +  ' serves ' + customer.name)
    }
}

Package = class{
    constructor(name, recipient) {
        this.name = name
        this.customer_who_bought = recipient
    }
}

/* INTERACTIONS */
/* 1. a package is bought by a customer
   2. packages are assigned to a delivery guy 
   3. a delivery guy serves many customers */

/* EXAMPLE */
/* luke delivers spaetzle to Mark Tremonti
   Delivery guy: luke
   Customer: Mark Tremonti 
   Package: Spaetzle
   Action: 1. Mark Tremonti buys Spaetzle
           2. A delivery guy is given the Spaetzle
           3. This delivery guy delivers the Spaetzle to Mark Tremonti */

/* runtime code -- main program -- real-time story */

bob = new Customer('Bob Marley')
mark = new Customer('Mark Tremonti')
alice = new Customer('Alice Cooper')

luke = new DeliveryGuy('Luke Skywalder')
bad_delivery_guy = new DeliveryGuy('Till Lindemann')

spaetzle = new Package('Spaetzle', mark)
luke.assignPackage(spaetzle)
luke.serveCustomer(mark)

output.close()
