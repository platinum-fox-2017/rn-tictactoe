import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class Box extends Component {

  state = {
    symbol: '  ',
    initialboard: ['','','','','','','','',''],
    statusPlayer1: true,
    statusPlayer2: false,
    symbolXstatus: true,
    symbolOstatus: false,
  }

  setSymbol = () => {
    // console.log(this.state.symbol, 'symbol')
    if ( this.state.symbolXstatus == true) {
      this.setState({
        symbol: 'X',
        statusPlayer1: false,
        statusPlayer2: true,
        symbolXstatus: false
      })
    } else {
      this.setState({
        symbol: 'O',
        statusPlayer1: false,
        statusPlayer2: true,
        symbolXstatus: true
      })
    }
  }

  componentDidMount () {
    // this.createBoard()
  }

  render() {
    return (
      <View>
        <Text> symbol: { this.state.symbolXstatus } </Text>
        <View style={ styles.board }>
          <TouchableHighlight
          style={styles.input}
          onPress={this.setSymbol}
          >
          <Text style={ styles.input }> { this.state.symbol } </Text>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.input}
          onPress={this.setSymbol}
          >
          <Text style={ styles.input }> { this.state.symbol } </Text>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.input}
          onPress={this.setSymbol}
          >
          <Text style={ styles.input }> { this.state.symbol } </Text>
          </TouchableHighlight>
        </View>
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