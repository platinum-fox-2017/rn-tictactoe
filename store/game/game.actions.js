import {
  START_GAME,
  SET_TOKEN,
  CHANGE_TURN,
  GAME_END
} from './game.actionTypes';

export const startNewGame = () => {
  return { type: START_GAME }
}

export const putToken = (payload) => {
  return dispatch => {
    payload.board[payload.index] = payload.token
    dispatch(setToken(payload.board))
    dispatch(changeTurn(payload.token))
    conditionChecker(payload)
  }
}

const conditionChecker = (payload) => {
  if(payload.board.indexOf("") !== -1) {
    console.log('lanjut')
  } else {
    console.log('habis')
  }
}

const setToken = (payload) => {
  return {
    type: SET_TOKEN,
    payload: payload
  }
}

const changeTurn = (payload) => {
  if(payload === 'X') { payload = 'O' }
  else { payload = 'X' };
  return {
    type: CHANGE_TURN,
    payload: payload
  }
}