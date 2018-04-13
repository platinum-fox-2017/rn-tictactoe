import * as actionTypes from './game.actionTypes';

const intialState = {
  username: 'abc',
}

export const game = (state = {...intialState}, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return { ...state, data: action.value };
    default:
      return state;
  }
}