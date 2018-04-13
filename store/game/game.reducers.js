import {
  START_GAME,
  CHANGE_TURN
} from './game.actionTypes';

const initalState = {
  board: ['O','','','X','X','O','','',''],
  playerTurn: 'O',
  turn: 0
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case START_GAME: return initalState;
    case CHANGE_TURN: {
      console.log('action')
      return {
      ...state,
      playerTurn: action.payload,
      turn: state.turn + 1
    }}
    default: return state
  }
};

export default reducers