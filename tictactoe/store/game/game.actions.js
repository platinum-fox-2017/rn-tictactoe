import { PRINT_BOARD, PRINT_LETTER } from './game.actionTypes'

export const printBoard = (size) => {
  return dispatch => {
    let board = []
    let boardSize = 9
    for(let i = 0; i < boardSize; i++) {
      board.push('')
    }
    dispatch({
      type: PRINT_BOARD,
      payload: board
    })
  }
}

export const printLetter = (board, index, letter) => {
  return dispatch => {
    board[index] = letter
    dispatch({
      type: PRINT_LETTER,
      payload: board
    })
  }
}