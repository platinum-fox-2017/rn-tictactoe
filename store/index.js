import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  data: reducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store