import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { printBoardReducer } from './game/game.reducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  printBoardReducer
})

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(logger, thunk)
  )
);

export default store;