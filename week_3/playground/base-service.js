const database = require('./database')

const db_filename = 'db.json'

module.exports = class Service {
    lastId = 0

    constructor() {}

    async add(entry) {
        // let's give entry a new id
        lastId = lastId + 1
        // assign new unqiue ID to entry
        entry.id = lastId
        // now we have a unique id
        // let's insert the item with that id into the database
        database.save(db_filename, entry)
    }

    async find(entryId) {
        // find the entry 
        var json_content = database.load(db_filename)
        // return the entry for the found entryId
        // what happens if it's not found? return 0
    }

    async findAll() {
        // returns each entry in a blob of data
    }

    async delete(entryId) {
        // delete entry based on ID
        // if entry exists return true
        // if entry doesn't exist return false
    }
}
