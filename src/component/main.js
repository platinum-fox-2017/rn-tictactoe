import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board}></View>
        <View style={styles.line}></View>
        <Text>Main</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board:{
    borderWidth: 3,
    height: 312,
    width: 312
  },
  line: {
    backgroundColor :'#000',
    height: 306,
    width: 3,
    position: 'absolute'
  }
});