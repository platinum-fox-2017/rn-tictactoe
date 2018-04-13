console.disableYellowBox=true
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Header from './app/components/Header'
import GameBoard from './app/components/GameBoard'
import { Provider } from 'react-redux';
import store from './app/store'

// const RootNav = StackNavigator(
//   {
//     GameBoard: {
//       screen: GameBoard
//     }
//   },
//   {
//     initialRouteName: 'Home'
//   }
// )

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      //   <RootNav />
      // </Provider>

      <View>
        <Header />
        <Game />
      </View>
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
