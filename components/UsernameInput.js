import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native'

class UsernameInput extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Username'
          style={ styles.textStyle }
          onChangeText={this.props.changeText}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: '20%',
    paddingBottom: 5,
    borderColor: 'silver',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'darkgrey',
    textAlign: 'center',
    
  }
})

export default UsernameInput