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
      <View style={styles.Board}>
        <TouchableOpacity>

        </TouchableOpacity>
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    playerName: state.playerName,
    test: state.test,
    board: state.board
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  submitName
}, dispatch)

export default connect(stateToProps, dispatchToProps)(Board);

const styles = StyleSheet.create({
  board: {
    width: 400,
    height: 400,
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
