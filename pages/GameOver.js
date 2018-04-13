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
   const { params } = this.props.navigation.state;
    const winner = params ? params.winner : null;
    return (
      <View>
        <Text> {winner} </Text>
        { winner == 1 &&  <Text> You Win </Text> }
        { winner == 2 &&  <Text> Computer Win </Text> }
        { winner == 0 &&  <Text> Seri </Text> }
        <Button onPress={ () => this.props.navigation.navigate('Board') } title="Play Again" />
      </View>
    );
  }
}

export default GameOver;
