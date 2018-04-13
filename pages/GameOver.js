import React, { Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native'

class GameOver extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      text: 'gameover'
    }
  }

  render() {
    return (
      <View>
        <Text>{ this.state.text } </Text>
        <Button onPress={ () => this.props.navigation.navigate('Board') } title="Play Again" />
      </View>
    );
  }
}

export default GameOver;
