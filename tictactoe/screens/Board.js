import React, { Component } from 'react';
import { View, Text } from 'react-native'

import BoardComponent from '../components/BoardComponent'

class Board extends Component {
  render() {
    return (
      <View>
        <Text>
          This is board game
        </Text>
        <BoardComponent />
      </View>
    )
  }
}

export default Board;