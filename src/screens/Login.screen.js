import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUsername } from '../store/game.actions'

const MapDispatchToProps = (dispatch) => bindActionCreators({ setUsername }, dispatch)

class Login extends Component {
  static navigationOptions = { title: 'Login' }

  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }

    this.onChangeText = this.onChangeText.bind(this)
  }

  onPress = () => {
    // this.props.setUsername(this.state.username)    
    this.props.navigation.navigate('Game', { username: this.state.username })
  }

  onChangeText = (value) => {
    this.setState({ username: value })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.username}
            name='username'
            placeholder='insert your name'
            onChangeText={this.onChangeText}
            value={this.state.username}
          />
        <View style={styles.button}>
          <Button title='New Game' onPress={this.onPress} disabled={ this.state.username === '' }/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  username: {
    marginVertical: 16,
    marginHorizontal: 24,
    textAlign: 'center',
    paddingBottom: 16,
  },
  button: {
    marginVertical: 36,
    marginHorizontal: 80,
  }
});

export default connect(null, MapDispatchToProps)(Login)