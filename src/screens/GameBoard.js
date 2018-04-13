import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import Box from '../components/Box'

export default class GameBoard extends Component {

  static navigationOptions = {
    title: "Game On!"
  }

  state = {
    statusPlayer1: true,
    statusPlayer2: false
  }

  setSymbol = () => {
    this.setState({
      statusPlayer1: false,
      statusPlayer2: true
    })
  }

  render() {
    // console.log(this.props.navigation.state.params)
    return (
      <View>
        <Text> { this.props.navigation.state.params.player1 } </Text>
        <Text> { this.props.navigation.state.params.player2 } </Text>
        <View style={ styles.container } >
          <View style={ styles.board } />
          <View style={ styles.line } />
          <View style={ [styles.line, {
            transform: [
              {translateX: 200}
            ]
          }]}
          />
          <View style={ [styles.line, {
            height: 3,
            width: 304,
            transform: [
              {translateY: 200}
            ]
          }]}
          />
          <View style={ [styles.line, {
            height: 3,
            width: 304,
            transform: [
              {translateY: 100}
            ]
          }]}
          />
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20
  },
  board: {
    borderWidth: 3,
    height: 304,
    width: 304
  },
  line: {
    backgroundColor: '#000',
    height: 304,
    width: 3,
    position: 'absolute',
    transform: [
      {translateX: 100}
    ]
  }
})

