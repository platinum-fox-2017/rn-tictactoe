import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SelectPlayer from './src/screens/SelectPlayer';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './redux/createStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}><RootStack/></Provider>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: WelcomeScreen
    },
    SelectPlayer: {
      screen:SelectPlayer
    }
  },
  {
    initialRouteName: `Home`
  }
)
