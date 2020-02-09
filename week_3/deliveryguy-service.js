const BaseService = require('./base-service')
const DeliveryGuy = require('./DeliveryGuy')

module.exports = class DeliveryGuyService extends BaseService {
    constructor() {
        super(DeliveryGuy, 'delivery_guy_db.json')
    }

    // extend API
}