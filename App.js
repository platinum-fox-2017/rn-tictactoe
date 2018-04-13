console.disableYellowBox = true;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

// import store from './src/store';

import Welcome from './src/components/Welcome';
import Game from './src/components/Game';

const RootStack = StackNavigator({
  Welcome: {
    screen: Welcome
  },
  Game: {
    screen: Game
  }
}, {
  initialRouteName: 'Welcome',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#bf0603',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
})

export default class App extends Component {
  render() {
    return (
      // <Provider>
        <RootStack />
      // </Provider>
    );
  }
}