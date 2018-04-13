import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity,
TextInput, Dimensions, Button } from 'react-native';

// Redux
import { bindActionCreators } from 'redux'
import { submitName } from '../redux/action.js'
import { connect } from 'react-redux'

class Board extends React.Component {
  render () {
    return (
      <View style={styles.board}>
        <View style={styles.smallContainer}>
          {
            this.props.board[0].map((pos, i) => (
                <TouchableOpacity style={styles.box}>
                  <Text>{this.props.boardState[0][i].val}</Text>
                </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.smallContainer}>
          {
            this.props.board[1].map((pos, i) => (
                <TouchableOpacity style={styles.box}>
                  <Text>{this.props.boardState[1][i].val}</Text>
                </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.smallContainer}>
          {
            this.props.board[2].map((pos, i) => (
                <TouchableOpacity style={styles.box}>
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
    board: state.board,
    boardState: state.boardState
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  submitName
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
