import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const ticStore = combineReducers({
  reducer
})

export default store = createStore(
  ticStore,
  applyMiddleware(thunk)
)
