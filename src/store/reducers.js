const initialState = {
  symbol: ''
}

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA': {
      return {
        ...state,
        symbol: action.payload
      }
    }
    default:
      return state
  }
}

export default inputReducer