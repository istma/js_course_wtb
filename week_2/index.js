/* INTERACTIONS */
/* 1. a package is bought by a customer
   2. packages are assigned to a delivery guy 
   3. a delivery guy serves many customers */

const Customer = require('./Customer')
const DeliveryGuy = require('./DeliveryGuy')
const Package = require('./Package')

var logger = require('logger').createLogger('./week_1_report.log');
logger.setLevel('debug')

const Database = require('./database')
var dbFile = 'db.json'

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
logger.debug('Bob Marley came to life')
mark = new Customer('Mark Tremonti')
logger.debug('Mark Tremonti came to life')
alice = new Customer('Alice Cooper')
logger.debug('Alice Cooper came to life')

luke = new DeliveryGuy('Luke Skywalder')
bad_delivery_guy = new DeliveryGuy('Till Lindemann')

spaetzle = new Package('Spaetzle', mark)
luke.assignPackage(spaetzle)
luke.serveCustomer(mark)

logger.warn('you didn\'t finish the exercise')

Database.save(dbFile, luke)
logger.info('saving luke to db')
Database.append(dbFile, alice)
logger.info('saving alice to db')
Database.append(dbFile, spaetzle)
logger.info('saving spaetzle to db')
