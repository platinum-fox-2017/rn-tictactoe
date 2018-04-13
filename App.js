import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

// comp
import Welcome from './src/screens/Welcome'
import Game from './src/screens/Game'

// redux
import { Provider } from 'react-redux'
import { store } from './src/redux/index.js'

const WelcomeStack = StackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Game: {
      screen: Game
    }
  },
  {
    initialRouteName: 'Welcome',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#20fc8e',
        height: 40,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WelcomeStack></WelcomeStack>
      </Provider>
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
