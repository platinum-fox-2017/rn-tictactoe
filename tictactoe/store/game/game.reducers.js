import { PRINT_BOARD, PRINT_LETTER } from './game.actionTypes'

const initialState = {
  loading: false,
  error: false,
}

export const printBoardReducer =(state= {...initialState, board: [] }, action) => {
  switch (action.type) {
    case PRINT_BOARD:
      return {
        ...state,
        board: action.payload
      }
    case PRINT_LETTER:
      return {
        ...state,
        board: action.payload
      }
    default:
      return state;
  }
}
