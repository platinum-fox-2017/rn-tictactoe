import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'

export default class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      player: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Write your name</Text>
        <TextInput
        style={{height: 40, width:200, borderColor: 'gray'}}
        onChangeText={(player) => this.setState({player})}
        value={this.state.player}
      />
      <Button
        title="play"
        onPress={() => {
          this.props.navigation.navigate('Main', {
            player: this.state.player
          });
        }}
        >
      </Button>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
