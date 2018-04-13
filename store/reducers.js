import { TOUCH_BOARD, WINNER } from './actionTypes'

const initialState = {
  boardData: [[0,0,0],[0,0,0],[0,0,0]],
  activePlayer: 0,
  winner: null
}

const tictacReducer = (state = initialState, action) => {
  if (action.type === TOUCH_BOARD) {
    return {...state, boardData: action.payload.newBoard, activePlayer: action.payload.activePlayer} 
  }
  if (action.type === WINNER) {
    return {...state, winner: action.payload} 
  }
  return state
}


export default tictacReducer
