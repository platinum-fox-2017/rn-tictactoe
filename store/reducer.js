const initialState = {
  inputUser: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PLAYER':
          return {
            ...state, 
            inputUser: action.payload
          }
      default:
          return state
  }
}

export default reducer