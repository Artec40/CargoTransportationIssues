import { applyMiddleware, combineReducers, createStore } from 'redux'
import requestsReducer from './requests-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    requestPage: requestsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store