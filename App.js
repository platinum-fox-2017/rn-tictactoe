import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen'
import MainScreen from './src/screens/MainScreen'
import store from './src/store/index'
import { Provider } from 'react-redux'
const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Main: {
    screen: MainScreen
  },
},{
  initialRouteName: 'Home',
});


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
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
