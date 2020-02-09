const fs = require('fs')

Database = class {
  constructor(filename) {
    this.filename = filename
  }
  static save(filename, data) {
    return new Promise ((resolve) => {
      resolve(fs.writeFileSync(filename, JSON.stringify(data)))
    })
  }
  
  static append(filename, data) {
    return new Promise ((resolve) => {
      resolve(fs.writeFileSync(filename, JSON.stringify(data), { flag: 'a'}))
    })
  }
  
  static load(filename) {
    return new Promise ((resolve) => {
      resolve(JSON.parse(fs.readFileSync(filename, 'utf8')))
    });
  }
}


module.exports = { Database }
