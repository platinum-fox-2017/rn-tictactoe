import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUsername } from '../store/game.actions'
import InputText from '../components/InputText'
import InputButton from '../components/InputButton'

const MapDispatchToProps = (dispatch) => bindActionCreators({ setUsername }, dispatch)

class Login extends Component {
  static navigationOptions = { title: 'Login' }

  constructor(props) {
    super(props)
    this.state = {
      playerOne: '',
      playerTwo: ''
    }

    this.onChangeTextPlayerOne = this.onChangeTextPlayerOne.bind(this)
    this.onChangeTextPlayerTwo = this.onChangeTextPlayerTwo.bind(this)
  }

  onPress = () => {
    /* istanbul ignore next */
    this.props.setUsername(this.state)
    /* istanbul ignore next */
    this.props.navigation.navigate('Game')
  }

  onChangeTextPlayerOne = (value) => {
    this.setState({ playerOne: value })
  }

  onChangeTextPlayerTwo = (value) => {
    this.setState({ playerTwo: value })
  }

  render() {
    return (
      <View style={styles.container}>
        <InputText
          name='playerOne'
          placeholder='insert player one'
          onChangeText={ this.onChangeTextPlayerOne }
          value={ this.state.playerOne }
        />
        <InputText
          name='playerTwo'
          placeholder='insert player two'
          onChangeText={ this.onChangeTextPlayerTwo }
          value={ this.state.playerTwo }
        />
        <InputButton title='New Game' onPress={ this.onPress } disabled={ this.state.playerOne === '' && this.state.playerTwo === '' } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});

export default connect(null, MapDispatchToProps)(Login)