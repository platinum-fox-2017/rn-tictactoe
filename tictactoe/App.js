import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store/index'

import WelcomeScreen from './screens/WelcomeScreen'
import Board from './screens/Board'

const RootStack = StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
    Board: {
      screen: Board
    }
  },
  {
    initialRouteName: 'Welcome',
  })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    );
  }
}
