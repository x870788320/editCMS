import { createStore, combineReducers } from 'redux'
import homeRe from './reducers/homeRe'
import loginRe from './reducers/loginRe'
import publicRe from './reducers/index'

const reducers = combineReducers({
    publicRe,homeRe, loginRe
})
const store = createStore(reducers)

export default store

