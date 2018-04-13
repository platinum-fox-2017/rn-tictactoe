import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import { Provider } from 'react-redux'
import { StackNavigator, SwitchNavigator } from 'react-navigation'
import store from './store/store'
import Game from './screens/Game'

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
  }
}, {
  initialRouteName: 'Game'
})
