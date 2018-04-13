import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from './src/screens/Welcome'
import Main from './src/screens/Main'
import End from './src/screens/End'
import { Provider } from 'react-redux'
import store from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    )
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: Welcome
  },
  Main: {
    screen: Main
  },
  End: {
    screen: End
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#FF3333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
