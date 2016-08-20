// entry
import ReactDOM from 'react-dom';
import React from 'react'
import { Provider } from 'react-redux'
import {selectTable} from './actions'
import configureStore from './configureStore'
import {destroyDB, addDocs, createIndexes} from './dbmanager'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import NavBar from './components/NavBar'
import Tables from './components/Tables'
import Graphs from './components/Graphs'
import User from './components/User'

import Login from './components/Login'
import './css/main.css'

const store = configureStore()

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
				<Route path = "/tables" component = {Tables}/>
				<Route path = "/graphs" component = {Graphs}/>
				<Route path = "/user" component = {User}/>
			</Route>
  	</Router>
	</Provider>, document.getElementById('react-root')
)
