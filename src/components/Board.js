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
    if (this.props.turn === 'player') {
      this.props.boardPress(row, col, 'X')
      this.props.turnChange()
    } else {
      this.props.boardPress(row, col, 'O')
      this.props.turnChange()
    }


  }

  render () {
    return (
      <View style={styles.board}>
        <Text>{this.props.turn}</Text>
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
