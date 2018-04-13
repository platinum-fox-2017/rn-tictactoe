import { 
  PRINT_BOARD,
  SELECT_BOARD
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

export const selectBox = (payload) => {
  return dispatch => {
    const {x, y, player, board} = payload
    let newBoard = []
    for (let i = 0; i < board.length; i++) {
      let row = []
      for(let j = 0; j < board[i].length; j++) {
        if (i === x && j === y) {
          row.push(player)
        } else {
          row.push(board[i][j])
        }
        newBoard.push(row)
      }
    }
    console.log(newBoard)
    dispatch(SELECTING_BOARD(newBoard))
  }
}

const SELECTING_BOARD = (data) => ({
  type: SELECT_BOARD,
  payload: data
})
