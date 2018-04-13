const initialize = {
  data: [],
}

const reducer = (state = initialize, action) => {
  switch (action.type) {
    case 'PRINT_BOARD': {
      return {
        ...state,
          data: action.payload
      }
    }

    default:
      return state;
  }
}

export default reducer