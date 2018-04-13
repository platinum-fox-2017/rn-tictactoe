console.disableYellowBox=true
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GameBoard from './app/components/GameBoard'
import { Provider } from 'react-redux';
import store from './app/store'

const RootNav = StackNavigator(
  {
    GameBoard: {
      screen: GameBoard,
      navigationOptions: {
        title: 'Tic Tac Toe',
        headerStyle: {
          backgroundColor: 'aqua',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,

        },
      }
    }
  },
  {
    initialRouteName: 'GameBoard'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNav />
      </Provider>

      // <View>
      //   <Header />
      //   <Game />
      // </View>
    )
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
