import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default class InputText extends Component {
  render() {
    return (
      <TextInput
        style={ styles.inputText }
        name={ this.props.name }
        placeholder={ this.props.placeholder }
        onChangeText={ this.props.onChangeText }
        value={ this.props.value }
      />
    )
  }
}

const styles = StyleSheet.create({
  inputText: {
    marginVertical: 16,
    marginHorizontal: 24,
    textAlign: 'center',
    paddingBottom: 16,
  }
});