console.disableYellowBox=true
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Game from './app/components/Game'
import { Provider } from 'react-redux';
import store from 'store'

const RootNav = StackNavigator(
  {
    Game: {
      screen: Game
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNav />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
