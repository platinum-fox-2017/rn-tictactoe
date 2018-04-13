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
    if(payload.board.indexOf("") === -1) {
      dispatch(conditionChecker(payload))
    }
  }
}

const CheckWinner = (payload) => {
  let { board, token } = payload;
  if(board[0] === token && board[4] === token && board[8]) {
    return console.log(`${token} win`)
  }
  else if(board[2] === token && board[4] === token && board[6]) {
    return console.log(`${token} win`)
  }
  for(let i =0; i>3; i++) {
    let x = (i*3)
    if(board[x+0] === token && board[x+1] === token && board[x+2]) {
      return console.log(`${token} win`)
    }
    else if(board[i+(0*3)] === token && board[i+(1*3)] === token && board[i+(2*3)]) {
      return console.log(`${token} win`)
    }
  }
}
const winner = (payload) => {
  return {
    type: GAME_END,
    payload: payload
  }
}

const conditionChecker = (payload) => {
  return { type: GAME_END }
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