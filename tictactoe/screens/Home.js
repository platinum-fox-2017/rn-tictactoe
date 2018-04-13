import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Button, TextInput } from 'react-native'
import Button2 from '../components/Button'

export default class Home extends Component {
  static navigationOptions = { title: 'Home'};
  constructor() {
   super()
   this.state = {
     text: ''
   } 
  }

  _goToGame = () => {
    console.log('tes')
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Tic Tac Toe </Text>
        <Text style={styles.title2}> Welcome! </Text>
        <Button2 name={'New Game'} goTo={this._goToGame} />
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
  title2: {
    marginTop: 40,
    fontSize: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 150,
  },
  button: {
    marginHorizontal: '20%',
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10,
    marginTop: 150
  },
  container: {
   flex: 1,
   backgroundColor: 'lightgreen',
  },
  inner_button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})