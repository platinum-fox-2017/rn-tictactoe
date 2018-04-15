import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

export default class InputButton extends Component {
  render() {
    return (
      <View style={ styles.button }>
        <Button
          title={ this.props.title }
          onPress={ this.props.onPress }
          disabled={ this.props.disabled || false }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 36,
    marginHorizontal: 80,
  }
});