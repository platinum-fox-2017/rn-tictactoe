import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Button2 extends Component {
  render() {
    return (
      <View style={styles.button}>
      <Button onPress={this.props.goTo} 
        title={this.props.name}
        color="white"/>
        </View>
    )
  }
}


const styles = new StyleSheet.create({
  button: {
    marginHorizontal: '20%',
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10,
    // marginTop: 150
  },
})