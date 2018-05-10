
export const resetGame = ()=> {
  return(dispatch) => {
    dispatch(loadReset())
  }
}
export const gameOn = (payload) => {
  return(dispatch) => {
    dispatch(loadGame(payload))
  }
}

export const setPlayer = (payload) => {
  return (dispatch) => {
    dispatch(loadPlayer(payload))
  }
}

export const setBoard = (payload) => {
  return(dispatch) => {
    dispatch(loadBoard(payload))
  } 
} 

const loadReset = () => {
  return{
    type: 'RESET'
  }
}

const loadGame = (payload) => {
  return{
    type: 'GAME_ON',
    payload: payload
  }
}

const loadBoard = (payload) => {
  return{
    type: 'SET_BOARD',
    payload: payload
  }
}

const loadPlayer = (payload) => {
  return {
    type: 'SET_PLAYER',
    payload: payload
  }
}