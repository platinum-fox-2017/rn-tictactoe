import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import Welcome from '../components/Welcome'

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome props={this.props}/>
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
    backgroundColor: '#4FDE31'
  }
});

export default WelcomeScreen;