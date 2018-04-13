import React, { Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native'

class Board extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      text: 'board'
    }
  }

  render() {
    return (
      <View>
        <Text>{ this.state.text } </Text>
        <Button onPress={ () => this.props.navigation.navigate('GameOver') } title="GameOver" />
      </View>
    );
  }
}

export default Board;
