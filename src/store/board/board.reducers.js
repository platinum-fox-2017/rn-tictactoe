import {
  LOAD_DATA
} from './board.actionTypes'

const initialState = {
  boardData: [['','',''],['','',''],['','','']],
  turnPlayer: 0
}

const reducer = (state=initialState, action) => {
  console.log('ini action type', action.type)

  switch (action.type) {
    case LOAD_DATA:
      return state
    default:
      return state
  }
}

export default reducer