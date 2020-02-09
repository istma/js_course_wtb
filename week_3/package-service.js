const BaseService = require('./base-service')
const Package = require('./Package')

module.exports = class PackageService extends BaseService {
    constructor() {
        super(Package, 'package_db.json')
    }

    // extend API
}