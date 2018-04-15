import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableHighlight,Button } from 'react-native';

class End extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 16}}> ~ {this.props.navigation.state.params.win} ~ </Text>
        <Text style={styles.font}> You WIN the game ! </Text>
        <Button
        onPress={()=> this.props.navigation.goBack()}
        title='Play Again' 
        />
      </View>
    )
  } 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  font:{
    fontSize: 20
  }
})
export default End ;