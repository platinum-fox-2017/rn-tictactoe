import React, { Component } from 'react';
import {connect} from 'react-redux'
import {  View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import Home from '../component/home'

class Start extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  
  static navigationOptions = {
    title: 'Tic Tac Toe Game'
  }

  render() {
    return (
      <View style={styles.container}>
        <Home/>
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
    marginTop: 10,
    backgroundColor: 'green',
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});

export default Start;