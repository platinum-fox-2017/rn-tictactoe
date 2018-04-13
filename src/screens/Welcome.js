import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity,
TextInput, Dimensions, Button } from 'react-native';

// Redux
import { bindActionCreators } from 'redux'
import { submitName } from '../redux/action.js'
import { connect } from 'react-redux'

class Welcome extends React.Component {
  constructor() {
    super()
    this.state = {
      playerName: ''
    }
  }

  static navigationOptions = {
    title: 'TicTacToe'
  }

  onInput = (text) => {
    this.setState({
      playerName: text
    })
  }

  submit = () => {
    this.props.submitName(this.state.playerName)
    this.props.navigation.navigate('Game')
  }


  render () {
    return (
      <View style={ styles.Container }>
        <Text>Your Name:</Text>
        <TextInput
          style={ styles.input }
          value={this.state.playerName}
          onChangeText={(text) => this.setState({playerName:text})}
        />

        <Button
          onPress={this.submit}
          title="Submit"
          color="#841584"
        />
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    playerName: state.playerName,
    test: state.test
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  submitName
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Welcome);

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
