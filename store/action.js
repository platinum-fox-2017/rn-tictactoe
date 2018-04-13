import { TOUCH_BOARD, WINNER } from './actionTypes'

export const touchBoard = (newBoard, activePlayer) => {
  return {
    type: TOUCH_BOARD,
    payload: { newBoard, activePlayer }
  }
}
export const winner = (player) => {
  return {
    type: WINNER,
    payload: player
    
}}
