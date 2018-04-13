import {
  SET_PLAYER,
  SET_ACTIVE_PLAYER
} from './game.actionTypes'

const initialState = {
  players: [
    {
      num: `1`,
      type: ``
    },
    {
      num: `2`,
      type: ``
    }
  ],
  activePlayer: ``
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return {
        ...state,
        players: [
          {
            num: `1`,
            type: action.payload.firstplayertype,
          },
          {
            num: `2`,
            type: action.payload.secondplayertype
          }
        ]
      }
    case SET_ACTIVE_PLAYER:
      return {
        ...state,
        activePlayer: action.payload
      }
    default:
      return state
  }
}

export default reducer