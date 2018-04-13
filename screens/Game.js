import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TouchAble from '../components/TouchAble';
import WhiteText from '../components/WhiteText';
import { startNewGame } from '../store/game/game.actions';
import BoardGame from '../components/BoardGame';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    gameEnded: state.gameReducers.gameEnded
  }
};
class Game extends React.Component {
  static navigationOptions = { title: 'Dashboard' };

  render() {
    if(this.props.gameEnded) {
      return this.props.navigation.navigate('Result');
    } else {
      return (
        <View style={styles.container}>
          <BoardGame />
        </View>
      );
    }
  }
}
export default connect(mapStateToProps, null)(Game);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
