import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

class Start extends Component {
  constructor(){
    super()
    this.state = {
      playerOne: 'player 1',
      playerTwo: 'player 2'
    }
  }
  
  static navigationOptions = {
    title: 'Tic Tac Toe Game'
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
          style={{borderColor: 'black', borderWidth: 1, height: 30, width: 100, marginBottom: 5}}
          onChangeText={(name) => this.setState({playerOne:name})}
          value={this.state.playerOne}
          />
          <TextInput
          style={{borderColor: 'black', borderWidth: 1, height: 30, width: 100}}
          onChangeText={(name) => this.setState({playerTwo:name})}
          value={this.state.playerTwo}
          />
        </View>
        <View style={styles.button}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Game', {name:this.state})}>
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
 
export default Start ;