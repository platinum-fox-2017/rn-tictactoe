import React, { Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native'

class Welcome extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      text: 'hallo'
    }
  }

  render() {
    return (
      <View>
        <Text>{ this.state.text } </Text>
        <Button onPress={ () => this.props.navigation.navigate('Board') } title="Login" />
      </View>
    );
  }
}

export default Welcome;
