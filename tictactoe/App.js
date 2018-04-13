import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import WelcomeScreen from './screens/WelcomeScreen'

const RootStack = StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
  },
  {
    initialRouteName: 'Tic tac toe',
  })
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
