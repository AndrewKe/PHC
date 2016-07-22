import {getDB} from '../dbmanager'

// Regular action creators
function receiveRows(rows) {
  return {
    type: 'RECEIEVE_ROWS',
    rows: rows
  }
}

function receiveColumns(columns) {
  return {
    type: 'RECEIVE_COLUMNS',
    columns: columns
  }
}

// Public thunks
export function selectTable(id) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SELECT_TABLE',
      id: id
    })
    dispatch(updateTableContent())
  }
}

export function addRow(row) {
  return (dispatch, getState, getDB) => {
    const db = getDB()
    const state = getState()

    row._id = String(new Date())
    row.type = "row"
    row.table = state.selectedTable

    console.log(row);

    db.put(row).then(() => {
      dispatch(updateTableContent())
    })
  }
}

// Private thunks
function updateTableContent(){
  return (dispatch, getState) => {
    dispatch(updateColumns())
    dispatch(updateRows())
  }
}

function getFullSelectedTable(state){
  return state.meta.tables.find((table) => {
    return table._id == state.selectedTable
  })
}

function updateColumns(){
  return (dispatch, getState, getDB) => {
    const state = getState()
    const db = getDB()

    var ids = getFullSelectedTable(state).columns

    Promise.all(ids.map((id) => db.get(id)))
    .then((result) => dispatch(receiveColumns(result)))
  }
}


function updateRows() {
  return (dispatch, getState, getDB) => {
    const state = getState()
    const db = getDB()

    db.find({
      selector: {type: 'row', table: state.selectedTable},
    }).then(function (result) {
      dispatch(receiveRows(result.docs))
    }).catch((err) => {
      console.error(err);
    })
  }
}
// export function updateRow(updatedRow) {
//   return (dispatch, getState) => {
//     const state = getState()
//
//     db.get(updatedDoc._id)
//     .then(doc => db.put(Object.assign(doc, updatedDoc)))
//     .then(() => db.allDocs({include_docs: true}))
//     .then((docs) => dispatch(receiveDocs(docs)))
//   }
// }
