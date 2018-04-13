import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoardComponent from '../components/Board_component'

export default class Board_screen extends Component {
    static navigationOptions = {
        title: 'Tic Tac Toe Games',
    };

  render() {
    return (
        < BoardComponent />
    );
  }
}


