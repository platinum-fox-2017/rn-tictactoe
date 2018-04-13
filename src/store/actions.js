import { INPUT } from './actionTypes';
import axios from 'axios';

export const inputSymbol = (payload) => {
  return dispatch(input(payload))
}

const input = (payload) => ({
  type: FETCH_DATA,
  payload
})