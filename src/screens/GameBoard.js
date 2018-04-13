import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Box from '../components/Box'

export default class GameBoard extends Component {

  static navigationOptions = {
    title: "Game On!"
  }

  render() {
    return (
      <View>
        <Box />
      </View>
    );
  }
}
