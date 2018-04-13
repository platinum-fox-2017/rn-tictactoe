import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setPlayerName } from '../store/actions'
import Button2 from '../components/Button'

class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  };
  constructor() {
   super()
   this.state = {
     player1Name: '',
     player2Name: ''
   } 
  }

  _goToGame = () => {
    console.log('tes')
    this.props.setPlayerName(this.state.player1Name, this.state.player2Name)
    this.props.navigation.navigate('Game')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Tic Tac Toe </Text>
        <View style={styles.inputWrapper}>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({player1Name: text})}
          value={this.state.text}
          placeholder={'Player One Name'}
          />
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({player2Name: text})}
          value={this.state.text}
          placeholder={'Player Two Name'}
          />
        </View>
        <Button2 name={'Start Game'} goTo={this._goToGame} />
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    marginHorizontal: '20%',
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10
  },
  container: {
   flex: 1,
   backgroundColor: 'lightgreen',
  },
  inner_button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    height: 40, 
    backgroundColor: 'white',
    marginHorizontal: '20%',
    padding: 10,
    marginTop: 10
  }, 
  inputWrapper: {
    marginTop: 150
  }
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  setPlayerName
}, dispatch)

export default connect(null, mapDispatchToProps) (Login)