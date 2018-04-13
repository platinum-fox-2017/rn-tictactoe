import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'
import TitleBar from '../components/TitleBar'
import BannerDesc from '../components/BannerDesc'
import ButtonGeneral from '../components/ButtonGeneral'

class Lose extends Component {
  moveToGame = () => {
    this.props.navigation.navigate('Game')
  }

  render() {
    return (
      <View>
        <TitleBar text={ 'Tic Tac Toe' }/>
        <View style={{ marginTop: 105 }}>
          <BannerDesc text={ 'Hooray! You Won!' }/>
        </View>
        <View style={{ marginTop: 145 }}>
          <ButtonGeneral text={ 'Play Again' } press={ this.moveToGame }/>
        </View>
      </View>
    )
  }
};

export default Lose