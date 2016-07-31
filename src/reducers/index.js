import modal from './modal'
import { combineReducers } from 'redux'
import user from './user.js'
function meta(state = {
  tables: []
}, action){
  switch (action.type) {
    case 'RECEIVE_TABLES':
      return {
        tables: action.tables
      }
    default:
      return state
  }
}
function rows(state = [], action){
  switch (action.type) {
    case 'RECEIEVE_ROWS':
      return action.rows
    default:
      return state
  }
}

function columns(state = [], action){
  switch (action.type){
    case 'RECEIVE_COLUMNS':
      return action.columns
    default:
      return state
  }
}

function tableContent(state = {}, action) {
  return {
    rows: rows(state.rows, action),
    columns: columns(state.columns, action)
  }
}

function selectedTable(state = '', action)
{
  switch(action.type){
    case 'SELECT_TABLE':
      return action.id
    default:
      return state
  }
}

const rootReducer = combineReducers({
  meta,
  selectedTable,
  tableContent,
  modal,
  user
})

export default rootReducer
