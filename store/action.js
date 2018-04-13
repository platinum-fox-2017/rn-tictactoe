import { 
  PRINT_BOARD
 } from './actionTypes'

export const printBoard = () => {
  return dispatch => {
    let board = []
    for (let i = 0; i < 3; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(0)
      }
      board.push(row)
    }
    dispatch(PRINTING_BOARD(board))
  }
}

const PRINTING_BOARD = (data) => ({
  type: PRINT_BOARD,
  payload: data
})
