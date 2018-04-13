import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Tic Tac Toe
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdc3c7',
    marginTop: 20,
    flexDirection: 'row'
  },
  title: {
    color: '#111',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    fontSize: 24,
    margin: 10,
  }
})