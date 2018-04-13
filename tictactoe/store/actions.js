import {
  SET_PLAYER1_NAME,
  SET_PLAYER2_NAME,
  SET_WINNER
} from './actionTypes'

export const setWinner = (name) => {
  return dispatch => {
    console.log('setWinner', name)
    dispatch(({
      type: SET_WINNER,
      payload: name
    }))
  }
}

export const setPlayerName = (name1, name2) => {
  return dispatch => {
    dispatch(setPlayer1Name(name1))
    dispatch(setPlayer2Name(name2))
  }
}

const setPlayer1Name = (payload) => ({
  type: SET_PLAYER1_NAME,
  payload
})

const setPlayer2Name = (payload) => ({
  type: SET_PLAYER2_NAME,
  payload
})
