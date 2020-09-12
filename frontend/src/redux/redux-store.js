import { applyMiddleware, combineReducers, createStore } from 'redux'
import issuesReducer from './issues-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    issuesPage: issuesReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store