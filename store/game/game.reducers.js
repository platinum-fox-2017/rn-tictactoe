import {
  START_GAME,
  SET_TOKEN,
  CHANGE_TURN
} from './game.actionTypes';

const initalState = {
  board: ['','','','','','','','',''],
  playerTurn: 'O',
  turn: 0
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case START_GAME: return initalState;
    case SET_TOKEN: return {
      ...state,
      board: action.payload
    }
    case CHANGE_TURN: return {
      ...state,
      playerTurn: action.payload,
      turn: state.turn + 1
    }
    default: return state
  }
};

export default reducers