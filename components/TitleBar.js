import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

class TitleBar extends Component {
  render() {
    return (
    <View style={styles.titleBar}>
      <Text style={styles.titleText}> {this.props.text} </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  titleBar: {
    marginTop: 15
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30
  },
})

export default TitleBar
