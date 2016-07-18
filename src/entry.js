// entry.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {selectTable} from './actions'
import configureStore from './configureStore'
import {destroyDB, addDocs, createIndexes} from './dbmanager'
import App from './components/App'

const columns = require('./testdocs/columns.json')
const rows = require('./testdocs/rows.json')
const tables =  require('./testdocs/tables.json')

const testdocs = [].concat(rows,columns,tables)

destroyDB()
.then(() => addDocs(testdocs))
.then(() => createIndexes())
.then(() => {
	const store = configureStore({
		meta: {
			tables: tables
		}
	})

	store.dispatch(selectTable(tables[0]._id))

	ReactDOM.render(
		<Provider store = {store}>
			<App/>
		</Provider>, document.getElementById('react-root')
	)
})
