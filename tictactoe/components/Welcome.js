import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { navigationOptions } from 'react-navigation'

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, paddingBottom: 20}}>
          TicTacBoom!
        </Text>
        <TouchableHighlight 
          style={styles.button}
          onPress={() => this.props.props.navigation.navigate('Board')}>
          <Text>
            Press here to play
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF8B7C',
    padding: 10
  }
});

export default Welcome;