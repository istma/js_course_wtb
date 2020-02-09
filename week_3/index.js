const DeliveryGuy = require('./DeliveryGuy')
const Customer = require('./Customer')
const Package = require('./Package')
const DeliveryGuyService = require('./deliveryguy-service')
const PackageService = require('./package-service')
const CustomerService = require('./customer-service')


async function main() {
    var customer_service = new CustomerService()
    var package_service = new PackageService()
    var delivery_guy_service = new DeliveryGuyService()

    var luke = new DeliveryGuy('Luke Skywalker')
    var spaetzle = new Package('Spaetzle')
    var mark = new Customer('Mark Tremonti')
    var myles = new Customer('Myles Kennedy')
    var brian = new Customer('Brian Marshall')

    await delivery_guy_service.add(luke)
    await package_service.add(spaetzle)
    await customer_service.add(mark)
    await customer_service.add(myles)
    await customer_service.add(brian)

    await customer_service.printAllElementsOfCustomerDb()

    await customer_service.del(mark)
    await package_service.del(spaetzle)
    await delivery_guy_service.del(luke)

    console.log(brian.getInstanceName())
}

main()