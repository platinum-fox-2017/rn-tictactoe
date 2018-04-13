import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Button, TextInput } from 'react-native'

export default class Home extends Component {
  constructor() {
   super()
   this.state = {
     text: ''
   } 
  }

  _goToGame = () => {
    console.log('tes')
    this.props.navigation.navigate('Game')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Tic Tac Toe </Text>
        <Text style={styles.info}>LSLSLSLS Win!</Text>
        <View style={styles.button}>
        <Button onPress={this._goToGame} 
          title="Play Again"
          color="white"/>
          </View>
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
  info: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
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
    marginTop: 150,
    padding: 10
  }
})