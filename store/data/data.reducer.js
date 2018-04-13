import { USERNAME_UPDATE } from './data.actionType'

const initialState = {
  username: '',  
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case USERNAME_UPDATE:
      return {
        ...state,
        username: action.username
      }
    default:
      return state
  }
}

export default reducers