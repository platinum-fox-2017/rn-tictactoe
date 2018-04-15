import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class Board extends Component {
  render() {
    return (
      <View style={ styles.keyboard }>
        { this.props.item }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 104,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
});