import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

class Blocks extends Component {
  render() {
    return (
      <View>
        <View style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 5,
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board_container: {
    flex: 1,
    justifyContent: 'center'
  },
  board: {
    flex: 3,
    flexDirection: 'column'
  },
  row: {
    flex: 3,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  block: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  block_text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  scores_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    flex: 1,
    alignItems: 'center'
  },
  user_score: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  username: {
    fontSize: 20
  }
});


export default Blocks;
