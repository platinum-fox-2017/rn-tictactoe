import { INPUT } from './actionTypes';

export const inputSymbol = (payload) => {
  return dispatch(input(payload))
}

const input = (payload) => ({
  type: FETCH_DATA,
  payload
})