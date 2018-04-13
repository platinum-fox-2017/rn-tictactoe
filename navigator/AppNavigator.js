import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from '../pages/Welcome'
import GameOver from '../pages/GameOver'
import Board from '../pages/Board'
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { touchBoard } from '../store/action'

export const RootStack = StackNavigator({
  Board: {
    screen: Board,
  },
  Welcome: {
    screen: Welcome,
  },
  GameOver: {
    screen: GameOver,
  },
  },{
    initialRouteName: 'Welcome',
});

class Navigator extends React.Component {
  render() {
    return (
        <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ touchBoard }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
