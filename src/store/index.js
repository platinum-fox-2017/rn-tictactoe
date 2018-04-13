import { createStore, applyMiddleware } from 'redux';
import input from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(input,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, thunk))

export default store