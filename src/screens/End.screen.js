import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import InputButton from '../components/InputButton'
import Status from '../components/Status'

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
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Status status={ 'Winner is ' + this.state.winner } />
        <InputButton title='Play Again' onPress={ this.onPress } />
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
});