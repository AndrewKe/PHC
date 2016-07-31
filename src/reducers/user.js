import { combineReducers } from 'redux'

function isLoggedIn(state = false, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESSFUL':
      return true
    case 'LOGOUT_SUCCESSFUL':
      return false
    default:
      return state
  }
}

export default combineReducers({
  isLoggedIn
})
