import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Start from './screen/start'
import Game from './screen/game'
import End from './screen/end'

const RootStack = StackNavigator({
  Start: {
    screen: Start
  },
  Game: {
    screen: Game
  },
  End: {
    screen: End
  }
}, {
  initialRouteName: 'Game',
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'teal'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <RootStack/>
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
