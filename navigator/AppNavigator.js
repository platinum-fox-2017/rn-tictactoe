import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from '../pages/Welcome'
import GameOver from '../pages/GameOver'
import Board from '../pages/Board'
import { StackNavigator } from 'react-navigation';

export const RootStack = StackNavigator({
  Board: {
    screen: Board,
  },
  Welcome: {
    screen: Welcome,
  },
  GameOver: {
    screen: GameOver,
  },
  },{
    initialRouteName: 'Board',
});

class Navigator extends React.Component {
  render() {
    return (
        <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Navigator
