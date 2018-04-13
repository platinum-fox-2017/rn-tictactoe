// Basic React
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigator and Prodvider
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

// Store
import store from './store/index.js'

// Screens
import Home from './src/screens/Home.js'
import Game from './src/screens/Game.js'

const RootStack = StackNavigator (
  {
    Home: {
      screen: Home
    },
    Game: {
      screen: Game
    }
  },
  {
    initialRouteName: 'Game'
  }
)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>);
  }
}

