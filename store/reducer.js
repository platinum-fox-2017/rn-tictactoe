const initialState = {
 playerOne: '',
 playerTwo: '',
 board: [['','',''],['','',''],['','','']],
 turn: '',
 fill: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return {
        ...state,
        playerOne: action.payload.playerOne,
        playerTwo: action.payload.playerTwo
      }
    case 'SET_BOARD':
      return{
        ...state,
        board: action.payload
      }
    case 'GAME_ON':
      return{
        ...state,
        turn: action.payload.turn,
        fill: action.payload.fill
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default reducer