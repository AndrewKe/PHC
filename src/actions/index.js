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

function receiveTables(tables) {
  return {
    type: 'RECEIVE_TABLES',
    tables: tables
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

export function loadTables() {
  return (dispatch, getState, getDbFunctions) => {
    const db = getDbFunctions().getDB()
    const state = getState()

    db.find({
      selector: {type: 'table'},
    }).then(function (result) {
      dispatch(receiveTables(result.docs))
      if (state.selectedTable === ''){
        if(result.docs[0]){
            dispatch(selectTable(result.docs[0]._id))
        }
      }
    })
  }
}

export function addRow(row) {
  return (dispatch, getState, getDbFunctions) => {
    const db = getDbFunctions().getDB()
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

export function updateRow(updatedDoc) {
  return (dispatch, getState, getDbFunctions) => {
    const db = getDbFunctions().getDB()
    const state = getState()

    db.get(updatedDoc._id)
    .then(doc => db.put(Object.assign(doc, updatedDoc)))
    .then(() => dispatch(updateTableContent()))
  }
}

export function deleteRow(doc) {
  return (dispatch, getState, getDbFunctions) => {
    const db = getDbFunctions().getDB()
    const state = getState()

    db.remove(doc)
    .then(() => dispatch(updateTableContent()))
  }
}

export function updateTableContent(){
  return (dispatch, getState) => {
    dispatch(updateColumns())
    dispatch(updateRows())
  }
}

// Private thunks

function getFullSelectedTable(state){
  return state.meta.tables.find((table) => {
    return table._id == state.selectedTable
  })
}

function updateColumns(){
  return (dispatch, getState, getDbFunctions) => {
    const state = getState()
    const db = getDbFunctions().getDB()

    var ids = getFullSelectedTable(state).columns

    Promise.all(ids.map((id) => db.get(id)))
    .then((result) => dispatch(receiveColumns(result)))
  }
}


function updateRows() {
  return (dispatch, getState, getDbFunctions) => {
    const state = getState()
    const db = getDbFunctions().getDB()

    db.find({
      selector: {type: 'row', table: state.selectedTable},
    }).then(function (result) {
      dispatch(receiveRows(result.docs))
    }).catch((err) => {
      console.error(err);
    })
  }
}
