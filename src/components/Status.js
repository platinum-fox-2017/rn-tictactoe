import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Status extends Component {
  render() {
    return (
      <View style={ styles.status }>
        <Text style={{ color: this.props.turn ? 'green' : 'black' }}> { this.props.status } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  status: {
    alignItems: 'center',
  }
});