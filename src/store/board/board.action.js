import {
  CHANGE_DATA
} from './board.actionTypes'


// handlePress = (indexi, indexj) => {
  //   console.log(indexi, indexj)
  //   let board = this.state.boardData
  //   let turnPlayer = this.state.turnPlayer
  //   if (turnPlayer === 0) {
  //     board[indexi][indexj] = 'x'
  //     turnPlayer = 1
  //   }else{
  //     board[indexi][indexj] = 'o'
  //     turnPlayer = 0
  //   }
  //   this.setState({
  //     boardData: board,
  //     turnPlayer: turnPlayer
  //   })
  // }

export const changeDataF = (indexi,indexj) => {
  return dispatch => {
    // console.log('ini masuk')
    dispatch(changeData(indexi,indexj))
  }
}

const changeData = (indexi,indexj) => {
  // console.log('ini masuk ke sini ga ya?')
  return {
    type: CHANGE_DATA,
    payload: indexi,
    payload2: indexj,
  }
}