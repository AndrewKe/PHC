import PouchDB from 'pouchdb'
import { browserHistory } from 'react-router';
import {loadTables, updateTableContent} from './index'
import {updateDocs} from '../dbmanager.js'

var seedDocs = require('../data/usa.json')

export function login(username, password) {
  return (dispatch, _, getDbFunctions) => {
    var users = new PouchDB('http://192.241.130.191:5984/db', {skipSetup: true});
    users.login(username, password).then(() => {
      dispatch(loginSuccessful())
      users.getSession().then((response) => {
        const country = response.userCtx.roles[0]
        var remote = new PouchDB(`http://192.241.130.191:5984/${country}`, {skipSetup: true});
        var local = getDbFunctions().getDB()

        local.sync(remote, {live: true, retry: true}).on('change', () => {
          console.log("db changed!");
          dispatch(loadTables())
          dispatch(updateTableContent())
        })

        dispatch(loadTables())
        browserHistory.replace('/phc.html');
        getDbFunctions().getUserDB().put({
          _id: 'currentUser',
          userName: username,
          password: password
        })

        /* updating metadata
        console.log('updating data...')
        updateDocs(seedDocs).then(
          () => {
            console.log('Done with updating data.')
            local.sync(remote, {live: true, retry: true}).on('change', () => {
              console.log("db changed after sync!");
              dispatch(loadTables())
              dispatch(updateTableContent())
            })
          })*/
      })
    })
  }
}

export function logout() {
  return (dispatch) => {
    var users = new PouchDB('http://192.241.130.191:5984/db', {skipSetup: true});
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
