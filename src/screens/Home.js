import React, { Component } from 'react';
import {  View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      player1: '',
      player2: ''
    } 
  }

  static navigationOptions = {
    title: "Tic Tac Toe"
  }

  playGame = () => {
    this.props.navigation.navigate('GameScreen',{
      difficulty: this.state.difficulty,
      category: this.state.category
    })
  }

  render() {

    return (
      <View>
        <Text style={ styles.title } > Welcome to Tic Tac Toe </Text>
        <Text style={ styles.label } > Player 1 : </Text>
        <TextInput
          onChange={ (text) => this.setState({ player1: text }) }
          style={ styles.playerForm }
          />
        <Text style={ styles.label } > Player 2 : </Text>
        <TextInput
          onChange={ (text) => this.setState({ player2: text }) }
          style={ styles.playerForm }
        />
        <Button
          title="Play"
          style={{ margin: 20 }}
          onPress={ () => this.props.navigation.navigate('GameBoard') }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 56,
    textAlign: 'center',
    marginVertical: 40,
  },
  label: {
    margin: 10,
    fontSize: 20
  },
  playerForm: {
    flexDirection: 'row',
    padding: 3,
    margin: 10,
    borderColor: 'gainsboro',
    borderWidth: 1,
    backgroundColor: 'gainsboro'
 },
})
