import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Board from './Board'

class Game extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Lets Play ${navigation.state.params.name}`,
    headerLeft: null
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Board />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
});

module.exports = Game;
