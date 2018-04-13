import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity,
TextInput, Dimensions, Button } from 'react-native';

// Redux
import { bindActionCreators } from 'redux'
import { submitName } from '../redux/action.js'
import { connect } from 'react-redux'

class Result extends React.Component {
  render () {
    return (
      <View>
        <Text>{this.props.result}</Text>
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    playerName: state.playerName,
    test: state.test,
    result: state.result,
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  submitName
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Result);
