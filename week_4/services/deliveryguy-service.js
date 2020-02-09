const BaseService = require('./base-service')
const DeliveryGuy = require('./../DeliveryGuy')

class DeliveryGuyService extends BaseService {
    constructor() {
        super(DeliveryGuy, 'delivery_guy_db.json')
    }

    // extend API
}

module.exports = new DeliveryGuyService()
