const initialState = {
  input: ['','','','','','','','','','']
}

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA': {
      return {
        ...state,
        data: action.payload
      }
    }
    default:
      return state
  }
}

export default inputReducer