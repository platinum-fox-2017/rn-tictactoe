import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity,
TextInput, Dimensions, Button } from 'react-native';

// Redux
import { bindActionCreators } from 'redux'
import { submitName, boardPress, turnChange } from '../redux/action.js'
import { connect } from 'react-redux'

class Board extends React.Component {

  boardClick = (row, col) => {
    if (this.props.turnCount >= 10) {
      return
    }
    if (this.props.turn === 'player') {
      if (this.props.boardState[row][col].val === '') {
        this.playerTurn(row, col, () => {

          // if (this.props.turnCount < 10) {
          //   let baseRow = [0,1,2]
          //   let newRow = baseRow.filter(r => row !== r);
          //   let aiRow = Math.floor(Math.random() * newRow.length)
          //   let baseCol = [0,1,2]
          //   let newCol = baseCol.filter(c => col !== c);
          //   let aicol = Math.floor(Math.random() * newCol.length)
            // if (this.props.boardState[newRow[aiRow]][newCol[aicol]].val !== '') {
              // this.props.boardPress(newRow[aiRow], newCol[aicol], 'O')
              // this.props.turnChange()
            // }
            // this.computerTurn(row, col)
          // }
        })
      }
    } else {
      if (this.props.boardState[row][col].val === '') {
        this.props.boardPress(row, col, 'O')
        this.props.turnChange()
      }
    }
  }

  playerTurn = (row, col, cb) => {
    this.props.boardPress(row, col, 'X')
    this.props.turnChange()
    cb()
  }

  checkResult = () => {
    // rows
    // this.boardState[0]
  }

  // computerTurn = function cTurn (row, col) {
  //   let baseRow = [0,1,2]
  //   let newRow = baseRow.filter(r => row !== r);
  //   let aiRow = Math.floor(Math.random() * newRow.length)
  //   let baseCol = [0,1,2]
  //   let newCol = baseCol.filter(c => col !== c);
  //   let aicol = Math.floor(Math.random() * newCol.length)
  //   if (this.props.boardState[newRow[aiRow]][newCol[aicol]].val === '') {
  //     this.props.boardPress(newRow[aiRow], newCol[aicol], 'O')
  //     this.props.turnChange()
  //   } else {
  //     return cTurn(row, col)
  //   }
  // }

  render () {
    return (
      <View style={styles.board}>
        <View style={styles.smallContainer}>
          {
            this.props.board[0].map((pos, i) => (
                <TouchableOpacity
                  key={pos}
                  style={styles.box}
                  onPress={()=> this.boardClick(0, i)}
                >
                  <Text>{this.props.boardState[0][i].val}</Text>
                </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.smallContainer}>
          {
            this.props.board[1].map((pos, i) => (
                <TouchableOpacity
                  key={pos}
                  style={styles.box}
                  onPress={()=> this.boardClick(1, i)}
                >
                  <Text>{this.props.boardState[1][i].val}</Text>
                </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.smallContainer}>
          {
            this.props.board[2].map((pos, i) => (
                <TouchableOpacity
                  key={pos}
                  style={styles.box}
                  onPress={()=> this.boardClick(2, i)}
                >
                  <Text>{this.props.boardState[2][i].val}</Text>
                </TouchableOpacity>
            ))
          }
        </View>


      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    playerName: state.playerName,
    test: state.test,
    turn: state.turn,
    turnCount: state.turnCount,
    board: state.board,
    isChange: state.isChange,
    boardState: state.boardState
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  submitName, boardPress, turnChange
}, dispatch)

export default connect(stateToProps, dispatchToProps)(Board);

let { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  board: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallContainer: {

    flexDirection: 'row',
  },
  box: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderWidth: 1,

  }
})
