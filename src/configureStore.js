import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import {getDbFunctions, getDB, getUserDB} from './dbmanager'

var preloadedState = {};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware.withExtraArgument(getDbFunctions), createLogger())
  )
  return store
}
