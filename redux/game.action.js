import {
  SET_ACTIVE_PLAYER,
  SET_PLAYER
} from './game.actionTypes'

export const setActivePlayer = (payload) => {
  return (dispatch) => {
    dispatch(setActivePlayerSuccess(payload))
  }
}

const setActivePlayerSuccess = (payload) => {
  return {
    type: SET_ACTIVE_PLAYER,
    payload: payload
  }
}