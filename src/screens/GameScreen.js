import React, { Component } from 'react';
import { 
  View, 
  Button,
  StyleSheet,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GameScreenComponent from '../components/GameScreenComponents'

class GameScreen extends Component {
  render() {
    return (
      <View>
        <GameScreenComponent/>
      </View>
    );
  }
}

export default GameScreen;