import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tiles from './Tiles';
import { putToken } from '../store/game/game.actions'

let arr = ['X','O','X','O','X','O','X','O','X']

const mapStateToProps = (state) => {
  return {
    board: state.gameReducers.board,
    token: state.gameReducers.playerTurn
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  putToken,
}, dispatch);

class BoardGame extends React.Component {
  press = (token, index) => {
    let payload = {
      token: token,
      index: index
    }
    this.props.putToken(token)
  }

  render() {
    const { board, token } = this.props;
    return (
      <View style={styles.container}>
        {
          board.map((val, i) => {
            return <Tiles
              onPress={ !val? () => this.press(token, i) : () => {} }
              content={ val }
            />
          })
        }
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardGame);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    backgroundColor: '#eeee',
  },
});
