// entry
import ReactDOM from 'react-dom';
import React from 'react'
import { Provider } from 'react-redux'
import {loadTables, updateTableContent, selectTable} from './actions'
import configureStore from './configureStore'
import {destroyDB, getDbFunctions, getUserDB, addDocs, createIndexes} from './dbmanager'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import NavBar from './components/NavBar'
import Tables from './components/Tables'
import Graphs from './components/Graphs'
import Blank from './components/Blank'
import User from './components/User'

import Login from './components/Login'
import './css/main.css'

const store = configureStore()

function initialize() {
  var userDb = getUserDB();
  userDb.get('currentUser').then(
    (doc) => {
      console.log('currentUser: ')
      console.log(doc);
			if (doc) {
		    console.log('user not null')
		    store.dispatch({type: "LOGIN_SUCCESSFUL"})
				store.dispatch(loadTables())
				//store.dispatch(updateTableContent())
				browserHistory.replace('/tables');
		  } else {
				browserHistory.replace('/login');
			}
    });
}

function checkAuth(nextState, replace) {
	console.log("Check auth");
	console.log(nextState);
  let {isLoggedIn} = store.getState().user
	if (!isLoggedIn) {
		console.log("Not logged in");
		replace('/login');
	}
}

ReactDOM.render(
	<Provider store = {store}>
		<Router history={browserHistory}>
			<Route path="/login" component={Login} />
			<Route path="/phc.html" onEnter={checkAuth} component={NavBar}>
				<IndexRedirect to = "/tables"/>
				<Route path = "/landing" component = {Blank}/>
				<Route path = "/tables" component = {Tables}/>
				<Route path = "/graphs" component = {Graphs}/>
				<Route path = "/user" component = {User}/>
			</Route>
  	</Router>
	</Provider>, document.getElementById('react-root')
)
//initialize()
