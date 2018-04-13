import {
  START_GAME,
  CHANGE_TURN
} from './game.actionTypes';

export const startNewGame = () => {

}

export const putToken = (payload) => {
  // return dispatch => {
  //   dispatch(changeTurn(payload.token))
  // }
  changeTurn(payload.token)
}

const changeTurn = (payload) => {
  if(payload === 'X') { payload = 'O' }
  else { payload = 'X' };
  return {
    type: CHANGE_TURN,
    payload: payload
  }
}

const fetchingAmiibosLoading = () => {
  return { type: FETCH_AMIIBOS_LOADING }
}

const fetchingAmiibosError = () => {
  return { type: FETCH_AMIIBOS_ERROR }
}