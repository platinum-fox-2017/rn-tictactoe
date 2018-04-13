import {
  START_GAME
} from './game.actionTypes';

const initalState = {
  board: ['O','','','X','X','O','','',''],
  playerTurn: 'O',
  turn: 0
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case START_GAME: return initalState;
    default: return state
  }
};

export default reducers