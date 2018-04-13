import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native'

class Welcome extends Component {
  render() {
    return (
      <View>
        <Text>
          TicTacBoom!
        </Text>
        <TouchableHighlight>
          <Text>
            Press here to play
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Welcome;