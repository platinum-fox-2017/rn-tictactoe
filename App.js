import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import Dashboard from './screens/Dashboard';
import Game from './screens/Game';
// import Result from './screens/Result';

const AppNavigator = StackNavigator({
  Dashboard: { screen: Dashboard },
  Game: { screen: Game },
  // Result: { screen: Result },
},{
  initialRouteName: 'Dashboard',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#00bfa5'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>);
  }
};
