const Express = require('express');
const bodyParser = require('./node_modules/body-parser')
const Customer = require('./Customer')
const Person = require('./person')
const customerService = require('./services/customer-service')
const personService = require('./services/person-service')

async function main() {

    // save data in our databases
    const bobMarley = new Customer('Bob Marley')
    const markTremonti = new Customer('Mark Tremonti')
    const aliceCooper = new Customer('Alice Cooper')

    await customerService.add(bobMarley)
    await customerService.add(markTremonti)
    await customerService.add(aliceCooper)

    // setup express web server
    const express_web_server = new Express()
    express_web_server.set('view engine', 'pug')
    express_web_server.use(bodyParser.json())

    // create end-points
    express_web_server.get('/', (req, res) => {
        res.sendFile(`${__dirname}/index.html`)
    })

    // create end-points
    express_web_server.get('/homepage', (req, res) => {
        res.render('layout')
    })

    express_web_server.get('/customers/all', async (req, res) => {
        const allCustomersInDb = await customerService.findAll()
        res.render('customer', { allCustomersInDb })
    })

    // start listening for requests
    express_web_server.listen(3000, () => {
        console.log('Server listening')
    })
}

main()
