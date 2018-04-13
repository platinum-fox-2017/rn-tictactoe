import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './screen/Home_screen';
import Board from './screen/Board_screen';

const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  Board: {
    screen: Board
  },
}, {
    initialRouteName: 'Board',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
