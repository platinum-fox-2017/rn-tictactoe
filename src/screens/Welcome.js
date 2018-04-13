import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class Welcome extends React.Component {

  static navigationOptions = {
    title: 'Home',
  }

  getMain = () => {
    this.props.navigation.navigate('Main')
  }

  render () {
    return (
      <View style={ styles.container }>
        <View style={ styles.boxContainer }>
          <Button title="Let(s) Play"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={ () => this.getMain() }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

export default Welcome;
