import * as actionTypes from './game.actionTypes';

export const setUsername = (value) => {
  return {
    type: actionTypes.SET_USERNAME,
    value
  }
}

export const updateBoard = (value) => {
  return {
    type: actionTypes.UPDATE_BOARD,
    value
  }
}