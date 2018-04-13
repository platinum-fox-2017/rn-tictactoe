import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class Box extends Component {

  state = {
    symbol: ''
  }

  input = () => {
    this.setState({
      symbol: 'X'
    })
  }

  render() {
    return (
      <View style={ styles.board }>
        <TouchableHighlight
         style={styles.input}
         onPress={this.input}
        >
        <Text style={ styles.input }> { this.state.symbol } </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.input}
         onPress={this.input}
        >
        <Text style={ styles.input }> { this.state.symbol } </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.input}
         onPress={this.input}
        >
        <Text style={ styles.input }> { this.state.symbol } </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 3,
    margin: 2,
    backgroundColor: 'gainsboro'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1
  }
})