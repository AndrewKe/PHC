import PouchDB from 'pouchdb'
PouchDB.plugin(require('pouchdb-find'))

var db = new PouchDB('db')

export function getDB() {
  return db
}

export function destroyDB() {
  return db.destroy()
  .then(() => {
    db = new PouchDB('db')
  })
}

export function addDocs(docs){
  return Promise.all(docs.map((doc) => {
    return db.put(doc)
  }))
}

export function createIndexes(){
  return db.createIndex({
    index: {
      fields: ['type', 'table']
    }
  })
}
