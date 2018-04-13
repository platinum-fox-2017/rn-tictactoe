import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

class Game extends Component {
  constructor() {
    super();
    this.state = {  }
  }

  static navigationOptions = {
    title: 'Tic Tac Toe Game On !'
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <View style={styles.board}>
          <View 
            style={[styles.line,{
              transform:[
                {translateX:200}
              ]
            }]}
          />
          <View 
            style={[styles.line,{
              height: 3,
              width: 306,
              transform: [
                {translateY: 200}
              ]
            }]}
          />
          <View 
            style={[styles.line,{
              height: 3,
              width: 306,
              transform: [
                {translateY: 100}
              ]
            }]}
          />
        </View>
      </View>
     )
  }
}
 
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  board: {
    borderWidth: 3,
    height: 312,
    width: 312
  },
  line:{
    backgroundColor: '#000',
    height: 306,
    width: 3,
    position: 'absolute',
    transform:[
      {translateX: 100}
    ]
  }
})
export default Game ;