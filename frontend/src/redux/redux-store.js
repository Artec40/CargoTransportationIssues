import { applyMiddleware, combineReducers, createStore } from 'redux'
import issuesReducer from './issues-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    issuesPage: issuesReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store