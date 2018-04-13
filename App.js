import React from 'react';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store/index'

import WelcomeScreen from './screens/WelcomeScreen'
import Board from './screens/Board'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

const RootStack = StackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    title: 'WelcomeScreen'
  },
  Board: {
    screen: Board,
    title: 'Board'
  },
});