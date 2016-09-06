import PouchDB from 'pouchdb'
PouchDB.plugin(require('pouchdb-find'))
PouchDB.plugin(require('pouchdb-authentication'));

var couchDbServer = 'http://192.241.130.191:5984/'
var db = new PouchDB('db')
var userDb = new PouchDB('userDb')
var dbFunctions = {
  getDB: getDB,
  getUserDB: getUserDB,
  getTables: getTables
}

export function getDbFunctions() {
  return dbFunctions;
}

export function getDB() {
  return db
}

export function getUserDB() {
  return userDb
}

function getTables() {
  return getDB().find({
    selector: {type: 'table'},
  })
}

export function destroyDB() {
  return db.destroy()
  .then(() => {
    db = new PouchDB('db')
  })
}

export function updateDocs(docs){
  return Promise.all(docs.map((doc) => {
    var db = getDB();
    return db.get(doc._id).then((docFromDb) => {
      if (docFromDb) {
        doc = Object.assign(docFromDb, doc)
      }
      console.log('updating...')
      console.log(docFromDb)
      console.log(doc)
      db.put(doc)
    }).catch(() => {
      console.log('creating...')
      console.log(doc)
      db.put(doc)
    })
  }))
}

export function createIndexes(){
  return db.createIndex({
    index: {
      fields: ['type', 'table']
    }
  })
}
