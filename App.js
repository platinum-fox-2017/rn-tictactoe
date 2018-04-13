import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './screens/Home'
// import Win from './screens/Win'
// import Lose from './screens/Lose'
// import Game from './screens/Game'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4fc3f7',
    color: 'white'
  }
})

const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: styles.header,
      title: "Home"
    }
  },
  // Win: {
  //   screen: Win,
  //   navigationOptions: {
  //     headerStyle: styles.header,
  //     title: "Game Over"
  //   }
  // },
  // Lose: {
  //   screen: Lose,
  //   navigationOptions: {
  //     headerStyle: styles.header,
  //     title: "Game Over"
  //   }
  // },
  // Game: {
  //   screen: Game,
  //   navigationOptions: {
  //     headerStyle: styles.header,
  //   }
  // },
}, {
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    );
  }
}


