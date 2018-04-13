import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

class Start extends Component {
  static navigationOptions = {
    title: 'Tic Tac Toe Game'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Game')}>
            <Text style={{color: 'white'}}>Game Start</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 5,
    backgroundColor: 'green',
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});
 
export default Start ;