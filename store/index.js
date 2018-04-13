import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import gameReducers from './game/game.reducers';

const reducers = combineReducers({
  gameReducers: gameReducers
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;