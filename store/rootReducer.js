import { combineReducers } from 'redux'
import Data from './data/data.reducer'

const reducers = combineReducers({
  data: Data,
})

export default reducers