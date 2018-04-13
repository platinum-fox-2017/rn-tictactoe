import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import logger from 'redux-logger'

const reducers = combineReducers({
})

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(logger)
  )
);

export default store;