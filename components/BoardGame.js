import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tiles from './Tiles';

let arr = ['X','O','X','O','X','O','X','O','X']

const mapStateToProps = (state) => {
  return {
    board: state.gameReducers.board
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

class BoardGame extends React.Component {
  render() {
    const { board } = this.props
    return (
      <View style={styles.container}>
        {
          board.map((val) => {
            return <Tiles
              onPress={ () => {} }
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
