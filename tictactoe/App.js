import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { StackNavigator, SwitchNavigator } from 'react-navigation'

import store from './store/store'

import Home from './screens/Home'
import Game from './screens/Game'
import End from './screens/End'
import Login from './screens/Login'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

const RootStack = SwitchNavigator ({
  Home: {
    screen: Home
  }, 
  Game: {
    screen: Game
  },
  End: {
    screen: End
  },
  Login: {
    screen: Login
  }
}, {
  initialRouteName: 'Home'
})
