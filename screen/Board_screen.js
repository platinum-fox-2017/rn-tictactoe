import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Board_screen extends Component {
    constructor() {
        super()
        this.state = {
            activePlayer: [],
            players: ['A', 'B'],
            boardData = []
        }
    }
    static navigationOptions = {
        title: 'Tic Tac Toe Games',
    };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
