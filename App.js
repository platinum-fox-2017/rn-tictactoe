import React from 'react';
import Welcome from './src/component/welcome'
import Main from './src/component/main'
import Over from './src/component/over'
import {Provider} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'

const Navigator = StackNavigator({
  Welcome:{
    screen:Welcome,
    navigationOptions: {
      headerTitle: 'Welcome',
    }
  },
  Main:{
    screen:Main,
    navigationOptions: {
      headerTitle: 'Tic Tac To',
    }
  },
  Over:{
    screen: Over,
    navigationOptions:{
      headerTitle: 'Over'
    }
  }
},{
  initialRouteName: 'Welcome',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

export default class App extends React.Component {
  render() {
    return (
        <Navigator/>
    );
  }
}


