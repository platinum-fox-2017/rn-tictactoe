import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity,
TextInput, Dimensions, Button } from 'react-native';

// Redux
import { bindActionCreators } from 'redux'
import { submitName } from '../redux/action.js'
import { connect } from 'react-redux'

// comp
import Board from '../components/Board'

class Game extends React.Component {
  static navigationOptions = {
    title: 'TicTacToe'
  }

  render () {
    return (
      <View style={styles.Container}>
        <Text>TicTacToe</Text>
        <Text>{this.props.turn} {this.props.turnCount}</Text>
        <Text>{this.props.playerName}</Text>
        <Board />
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
    board: state.board
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  submitName
}, dispatch)

export default connect(stateToProps, dispatchToProps)(Game);

let { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: width-20,
    borderColor: 'black',
    borderWidth: 1
  }
})
