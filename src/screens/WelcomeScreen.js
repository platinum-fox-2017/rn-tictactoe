import React, { Component } from 'react';
import React, { Component } from 'react';
import { 
  View, 
  Button,   
  ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Tic Tac Toe Game',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={ style.container }>
        <Button
          title={item.caption}
          color="#ff6600"
          onPress={ () => {
            this.props.navigation.navigate('SelectPlayer', {})
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default WelcomeScreen;