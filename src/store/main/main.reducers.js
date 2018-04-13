const initialState = {
  isO: false
}

const reducers = (state = { ...initialState }, action) => {
  console.log(action);
  switch (action.type) {
    case 'LIST_POSITION':
      return {
        ...state,
        isO: true
      }
    default:
      return state
  }
}

export default reducers
