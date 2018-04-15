import React, { Component } from 'react'
import { StyleSheet, Button, View } from 'react-native'

export default class SmallButton extends Component {
  render() {
    return (
      <View style={styles.key}>
        <Button title={ this.props.title } onPress={() => this.props.onPress(this.props.index) } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  key: {
    marginVertical: 4,
    marginHorizontal: 8,
    width: 40,
  }
});