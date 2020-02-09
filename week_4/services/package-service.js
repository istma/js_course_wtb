const BaseService = require('./base-service')
const Package = require('./../Package')

class PackageService extends BaseService {
    constructor() {
        super(Package, 'package_db.json')
    }

    // extend API
}

module.exports = new PackageService()
