import * as actionTypes from './game.actionTypes';

const intialState = {
  playerOne: '',
  playerTwo: '',
  board : ['-1','-1','-1','-1','-1','-1','-1','-1','-1'],
  status: false,
}

export const game = (state = {...intialState}, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return { ...state, playerOne: action.value.playerOne, playerTwo: action.value.playerTwo};
    case actionTypes.UPDATE_BOARD:
      return { ...state, board: action.value };
    default:
      return state;
  }
}