import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MapStateToProps = (state) => {
  return {
    username: state.game
  }
}

// const MapDispatchToProps = (dispatch) => bindActionCreators({...actionPassword, ...actionAuth, ...actionModal}, dispatch)

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

    console.log(this.props)
    // this.props.navigation.navigate('Game')
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

export default connect(MapStateToProps, null)(Login)