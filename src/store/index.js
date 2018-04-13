import {
  createStore,
  applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk'

import reducer from './board/board.reducers'

export default store = createStore(
  reducer,
  applyMiddleware(thunk)
)