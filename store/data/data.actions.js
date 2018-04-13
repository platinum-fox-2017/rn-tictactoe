import { USERNAME_UPDATE } from './data.actionType'

export const UsernameUpdate = (payload) => {
  return dispatch => {
   dispatch(UsernameUpdateSuccess(payload)) 
  }
}

const UsernameUpdateSuccess = (payload) => ({
  type: USERNAME_UPDATE,
  username: payload
})