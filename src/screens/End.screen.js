import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class End extends Component {
  static navigationOptions = { title: 'Game Over' }

  constructor(props) {
    super(props)
    this.state = {
      winner: '',
    }
  }

  componentDidMount = () => {
    this.setState({ player: this.props.navigation.state.params.winner })
  }

  render() {
    return (
      <View>
        <Text> Winner is { this.state.winner } </Text>
      </View>
    )
  }
}