import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import InputButton from '../components/InputButton'
import Status from '../components/Status'

const MapStateToProps = (state) => {
  return {
    winner: state.game.winner
  }
}

class End extends Component {
  static navigationOptions = { title: 'Game Over' }

  onPress = () => {
    /* istanbul ignore next */
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Status status={ 'Winner is ' + this.props.winner } />
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

export default connect(MapStateToProps, null)(End)