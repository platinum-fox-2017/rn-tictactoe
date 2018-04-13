import React, { Component } from 'react';
import {  View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: "Tic Tac Toe"
  }
  
  state = {
    player1: '',
    player2: ''
  } 
  


  render() {
    console.log(this.state.player1)
    console.log(this.state.player2)
    return (
      <View>
        <Text style={ styles.title } > Welcome to Tic Tac Toe </Text>
        <Text style={ styles.label }> Player 1 </Text>
        <TextInput
          style={ styles.playerForm }
          onChangeText={
            (text) => this.setState({
              player1: text
            })
          }
          value={ this.state.player1 }
          />
        <Text style={ styles.label } > Player 2 </Text>
        <TextInput
          style={ styles.playerForm }
          onChangeText={
            (text) => this.setState({
              player2: text
            })
          }
          value={ this.state.player2 }
        />
        <Button
          title="Play"
          style={{ margin: 20 }}
          onPress={ () => this.props.navigation.navigate('GameBoard',{
            player1: this.state.player1,
            player2: this.state.player2
          }) }
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
