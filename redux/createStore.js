import { 
  createStore, 
  applyMiddleware,
  combineReducers 
} from 'redux';

import thunk from 'redux-thunk';
import gameReducer from './game.reducer'

const reducers = combineReducers({
  gameReducer: gameReducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store