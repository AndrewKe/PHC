// entry.js
import ReactDOM from 'react-dom';
import React from 'react'
import { Provider } from 'react-redux'
import {selectTable} from './actions'
import configureStore from './configureStore'
import {destroyDB, addDocs, createIndexes} from './dbmanager'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App'
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
			<Route path="/" onEnter={checkAuth} component={App} />
  	</Router>
	</Provider>, document.getElementById('react-root')
)
