import { createStore, combineReducers, applyMiddleware } from 'redux'
import { game } from './game.reducers';
import thunk from 'redux-thunk';

export default store = createStore(combineReducers({ game }), applyMiddleware(thunk));