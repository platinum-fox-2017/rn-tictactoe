import React, { Component } from 'react';
import { View, Text } from 'react-native'

import Welcome from '../components/Welcome'

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Welcome />
      </View>
    );
  }
}

export default WelcomeScreen;