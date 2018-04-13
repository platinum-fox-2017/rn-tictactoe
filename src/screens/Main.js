import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class Main extends React.Component {

  static navigationOptions = {
    title: 'Tic Tac Toe',
  }

  render () {
    return (
      <View>
        <View></View>
      </View>
    )
  }
}

onst styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  boxTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    flex: 1,
    backgroundColor: '#FFEEE4'
  },
  character: {
    flex: 1.5,
    backgroundColor: '#F17F42'
  },
  keyboard: {
    flex: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Main;
