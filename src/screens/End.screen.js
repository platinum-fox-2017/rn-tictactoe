import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class End extends Component {
  static navigationOptions = { title: 'Game Over' }

  constructor(props) {
    super(props)
    this.state = {
      winner: '',
    }
  }

  componentDidMount = () => {
    this.setState({ winner: this.props.navigation.state.params.winner })
  }

  onPress = () => {
    // this.props.navigation.navigate.goBack().goBack();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.status}>
        <Text> Winner is { this.state.winner } </Text>
        <View style={styles.button}>
          <Button title='New Game' onPress={this.onPress}/>
        </View>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  status: {
    alignItems: 'center',
  },
  username: {
    marginVertical: 16,
    marginHorizontal: 24,
    textAlign: 'center',
    paddingBottom: 16,
  },
  button: {
    marginVertical: 36,
    marginHorizontal: 80,
  }
});