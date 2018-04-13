import { createStore } from 'redux'
import tictacReducer from './reducers'

const store = createStore(tictacReducer)

export default store
