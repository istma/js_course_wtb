const BaseService = require('./base-service')
const fs = require('fs')
const Customer = require('./../Customer')

class CustomerService extends BaseService {
    constructor() {
        // delete customer_db.json
        //fs.unlinkSync('customer_db.json')
        super(Customer, 'customer_db.json')
    }

    // extend API
    async printAllElementsOfCustomerDb() {
        var all_entries_in_db = await this.findAll()

        var counter_of_entries = 0

        var entry
        for (entry in all_entries_in_db) {
            counter_of_entries += 1
            console.log(`${counter_of_entries}th ` + 
            `element: ${entry}`)
        }
    }
}

module.exports = new CustomerService()
