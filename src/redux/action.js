import {
  GET_CARD_OK, GET_CARD_LOAD, GET_CARD_ERR,
  GET_XKCD_OK, GET_XKCD_LOAD, GET_XKCD_ERR,
  NAME_SUBMIT, BOARD_PRESS, BOARD_PRESS_LOAD,
  TURN_CHANGE
} from './actionTypes.js'
import axios from 'axios'


// ACTIONS
export function actName (name) {
  return {type: NAME_SUBMIT, payload: name}
}
export function actBoardPress (payload) {
  return {type: BOARD_PRESS, payload: payload}
}
export function actBoardPressLoad (payload) {
  return {type: BOARD_PRESS_LOAD, payload: payload}
}
export function actTurn (payload) {
  return {type: TURN_CHANGE, payload: payload}
}


export function actCards (card) {
  return {type: GET_CARD_OK, payload: card}
}
export function actCardsLoad () {
  return {type: GET_CARD_LOAD}
}
export function actCardsErr (err) {
  return {type: GET_CARD_ERR, payload: err}
}

export function actComic (comic) {
  return {type: GET_XKCD_OK, payload: comic}
}
export function actComicLoad () {
  return {type: GET_XKCD_LOAD}
}
export function actComicErr (err) {
  return {type: GET_XKCD_ERR, payload: err}
}

// THUNK MIDDLEWARE
export function submitName (name) {
  return (dispatch) => {
    dispatch(actName(name))
  }
}
export function boardPress (row, col, val) {
  return (dispatch, getState) => {
    dispatch(actBoardPressLoad(true))
    let boardState = getState().boardState
    let board = getState().board
    boardState[row][col].val = val
    let data = {
      boardState,
      board
    }
    dispatch(actBoardPress(data))
    dispatch(actBoardPressLoad(false))
  }
}
export function turnChange () {
  return (dispatch, getState) => {
    let turn = getState().turn
    let turnCount = getState().turnCount + 1

    if (turn === 'player') {
      let data = {
        turn: 'opponent',
        turnCount
      }
      dispatch(actTurn(data))
    } else {
      let data = {
        turn: 'player',
        turnCount
      }
      dispatch(actTurn(data))
    }

  }
}

export function getCards (source) {
  return (dispatch) => {
    dispatch(actCards([]))
    dispatch(actCardsLoad())

    const url = 'https://api.pokemontcg.io/v1/cards?types=fire&page=1'
    axios.get(url).then(response => {
      dispatch(actCards(response.data.cards))
    }).catch(err => {
      dispatch(actCardsErr(err))
    })

  }
}

export function getComic () {
  return (dispatch) => {
    dispatch(actComic({}))
    dispatch(actComicLoad())
    const url = 'http://xkcd.com/info.0.json'
    axios.get(url).then(response => {
      console.log(response);
      dispatch(actComic(response.data))
    }).catch(err => {
      dispatch(actComicErr(err))
    })

  }
}
