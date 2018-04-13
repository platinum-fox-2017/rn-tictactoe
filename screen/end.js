import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

class End extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() {
    if(this.props.result === false){
      return ( 
        <View>
          <Text>
              you lost    
          </Text>
        </View>
       )
    }else{
      return(
        <View>
          <Text>you win </Text>
        </View>
      )
    } 
  }
}
 
export default End ;