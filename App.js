import React from 'react';
import { StackNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import { Provider } from 'react-redux'
import store from './store/index'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

const RootStack = StackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    title: 'WelcomeScreen'
  }
});