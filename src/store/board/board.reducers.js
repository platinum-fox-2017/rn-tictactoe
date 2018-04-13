import {
  CHANGE_DATA
} from './board.actionTypes'

const initialState = {
  boardData: [['x','',''],['','',''],['','','']],
  turnPlayer: 0
}

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

const reducer = (state=initialState, action) => {
  console.log('ini action', action)

  switch (action.type) {
    case CHANGE_DATA:
      let board = this.state.boardData
      return {
        ...state,

      }
    default:
      return state
  }
}

export default reducer