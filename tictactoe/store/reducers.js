import {
  SET_PLAYER1_NAME,
  SET_PLAYER2_NAME,
  SET_WINNER
} from './actionTypes'

const initialState = {
  winner: null,
  player1_name: 'Anonymous_1',
  player2_name: 'Anonymous_2'
}

const reducers = (state = {...initialState}, action) => {
  switch(action.type) {
    case SET_PLAYER1_NAME:
      return {
        ...state,
        player1_name: action.payload
      }
    case SET_PLAYER2_NAME:
      return {
        ...state,
        player2_name: action.payload
      }
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload
      }
    default: 
      return state
  }
}

export default reducers