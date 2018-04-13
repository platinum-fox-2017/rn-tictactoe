import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Game extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View>
          
        </View>
        <Text> Hellooo </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },

})

export default Game;
