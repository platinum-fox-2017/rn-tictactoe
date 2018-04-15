import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Status from '../components/Status'
import SmallButton from '../components/SmallButton'
import Board from '../components/Board'

import { updateBoard } from '../store/game.actions'

const MapStateToProps = (state) => {
  return {
    playerOne: state.game.playerOne,
    playerTwo: state.game.playerTwo,
    board: state.game.board,
    status: state.game.status,
  }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({ updateBoard }, dispatch)

class Game extends Component {
  static navigationOptions = { title: 'TicTacToe' }

  constructor(props) {
    super(props)
    this.state = {
      status: false,
    }
  }

  onPress = (index) => {
    let newBoard = this.props.board;
    if (newBoard[index] === '-1') {
      if (this.state.status) newBoard[index] = '1';
      else newBoard[index] = '0';
      
      this.props.updateBoard(newBoard)

      this.setState({ status: !this.state.status }, () => {
        if(
          this.checkWinner(0,1,2) ||
          this.checkWinner(3,4,5) ||
          this.checkWinner(6,7,8) ||
          this.checkWinner(0,3,6) ||
          this.checkWinner(1,4,7) ||
          this.checkWinner(2,5,8) ||
          this.checkWinner(0,4,8) ||
          this.checkWinner(2,4,6)
        ) {}
      })
    }
  }

  checkWinner = (p1, p2, p3) => {
    let board = this.props.board;
    if (board[p1] == '-1' || board[p2] == '-1' || board[p2] == '-1') return false;
    else {
      if (board[p1] == board[p2] && board[p2] == board[p3] && board[p1] == board[p3]) {
        this.props.updateBoard(['-1','-1','-1','-1','-1','-1','-1','-1','-1'])
        if (board[p1] == '0') this.props.navigation.navigate('End', { winner: this.props.playerOne })
        if (board[p1] == '1') this.props.navigation.navigate('End', { winner: this.props.playerTwo })
        return true;
      }
    }
    
    return false
  }

  render() {
    let board = [];
    for(let i = 0; i < this.props.board.length; i++) {
      let title = '';
      if (this.props.board[i] == '1') title = 'O';
      if (this.props.board[i] == '0') title = 'X';
      if (this.props.board[i] == '-1') title = ' ';
      board.push(<SmallButton key={ 'key' + i } title={ title } onPress={ this.onPress } index={ i } />)
    }
    return (
      <View style={styles.container}>
        <Status turn={ !this.state.status } status={ 'Player One: ' + this.props.playerOne + ' : X' } />
        <Status turn={ this.state.status } status={ 'Player Two: ' + this.props.playerTwo + ' : O' } />
        <Board item={ board } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});

export default connect(MapStateToProps, MapDispatchToProps)(Game)