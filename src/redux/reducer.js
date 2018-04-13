import {
  GET_CARD_OK, GET_CARD_LOAD, GET_CARD_ERR,
  GET_XKCD_OK, GET_XKCD_LOAD, GET_XKCD_ERR,
  NAME_SUBMIT
} from './actionTypes.js'
// REDUCERS
export default function reducer (state={
  isLoading: false,
  err: '',
  board: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  comic: {},
  test: 'Connected to Redux! :v',
  playerName: ''
}, action) {
  switch (action.type) {
    case NAME_SUBMIT: {
      return {
        ...state,
        playerName: action.payload
      }
    }
    case GET_CARD_OK: {
      return {
        ...state,
        cards: action.payload,
        isLoading: false
      }
    }
    case GET_CARD_LOAD: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_CARD_ERR: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }
    case GET_XKCD_OK: {
      return {
        ...state,
        comic: action.payload,
        isLoading: false
      }
    }
    case GET_XKCD_LOAD: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_XKCD_ERR: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }
    default: {
      return state
    }

  }
}
