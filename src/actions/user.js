import PouchDB from 'pouchdb'
import { browserHistory } from 'react-router';
import {loadTables, updateTableContent} from './index.js'

export function login(username, password) {
  return (dispatch, _, getDB) => {
    var users = new PouchDB('http://localhost:5984/db', {skipSetup: true});
    users.login(username, password).then(() => {
      dispatch(loginSuccessful())
      users.getSession().then((response) => {
        const country = response.userCtx.roles[0]
        var remote = new PouchDB(`http://localhost:5984/${country}`, {skipSetup: true});
        var local = getDB()

        local.sync(remote, {live: true, retry: true}).on('change', () => {
          console.log("db changed!");
          dispatch(loadTables())
          dispatch(updateTableContent())
        })

        dispatch(loadTables())
        browserHistory.replace('/');
      })
    })
  }
}

export function logout() {
  return (dispatch) => {
    var users = new PouchDB('http://localhost:5984/db', {skipSetup: true});
    users.logout().then(() => {
      dispatch(logoutSuccessful())
    }).catch((err) => {
      console.log(err);
    })
  }
}

function loginSuccessful() {
  return {
    type: "LOGIN_SUCCESSFUL"
  }
}

function logoutSuccessful() {
  return {
    type: "LOGOUT_SUCCESSFUL"
  }
}
