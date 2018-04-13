import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TouchAble from '../components/TouchAble';
import WhiteText from '../components/WhiteText';
import { startNewGame } from '../store/game/game.actions'

export default class Result extends React.Component {
  static navigationOptions = { title: 'Dashboard' };

  playGame = () => {
    startNewGame()
    this.props.navigation.navigate('Game');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchAble
          onPress={ this.playGame }
          content={ <WhiteText content={'Play Again'}/> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
