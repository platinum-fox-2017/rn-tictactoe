import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import GameBoard from './src/screens/GameBoard';
import store from './src/store'

export default class App extends React.Component {
  render() {
    return (
    <Provider store={ store }>
      <RootStack />
    </Provider>
    );
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  GameBoard: {
    screen: GameBoard
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#d32f2f'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
});
