import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login.screen';
import Game from './src/screens/Game.screen';
import End from './src/screens/End.screen';
import store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootNavigator />
      </Provider>
    );
  }
}

const RootNavigator = StackNavigator({
  Login: { screen: Login },
  Game: { screen: Game },
  End: { screen: End },
}, {
  initialRouteName: 'Login',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
