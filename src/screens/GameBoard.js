import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import Box from '../components/Box';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inputSymbol } from '../store/actions';

class GameBoard extends Component {

  static navigationOptions = {
    title: "Game On!"
  }

  state = {
    symbol: '  ',
    initialboard: ['','','','','','','','',''],
    statusPlayer1: true,
    statusPlayer2: false,
    symbolXstatus: true,
    symbolOstatus: false,
  }

  setSymbol = () => {
    // console.log(this.state.symbol, 'symbol')
    if ( this.state.symbolXstatus == true) {
      this.setState({
        symbol: 'X',
        statusPlayer1: false,
        statusPlayer2: true,
        symbolXstatus: false
      })
    } else {
      this.setState({
        symbol: 'O',
        statusPlayer1: false,
        statusPlayer2: true,
        symbolXstatus: true
      })
    }
  }

  render() {
    // console.log(this.props.navigation.state.params)
    return (
      <View>
        <Text> { this.props.navigation.state.params.player1 } </Text>
        <Text> { this.props.navigation.state.params.player2 } </Text>
        <Box />
      </View>
    );
  }
}

const mapStateToProps = ((state) => {
  return {
    symbol: state.symbol
  }
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  inputSymbol
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
