import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const appStore = combineReducers({
  reducers
})

export default store = createStore(
  appStore,
  applyMiddleware(thunk)
)