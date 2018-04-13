import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MapStateToProps = (state) => {
  return {
    username: state.game.username
  }
}

class Game extends Component {
  static navigationOptions = { title: 'TicTacToe' }

  constructor(props) {
    super(props)
    this.state = {
      board : ['-1','-1','-1','-1','-1','-1','-1','-1','-1'],
      player: '',
      status: false,
    }
  }

  componentDidMount = () => {
    this.setState({ player: this.props.navigation.state.params.username })
  }

  onPress = (index) => {
    let newBoard = this.state.board;
    if (newBoard[index] == '-1') {
      if (this.state.status) newBoard[index] = '1';
      else newBoard[index] = '0';

      this.setState({ board: newBoard, status: !this.state.status }, () => {
        if(
          this.checkWinner(0,1,2) ||
          this.checkWinner(3,4,5) ||
          this.checkWinner(6,7,8) ||
          this.checkWinner(0,3,6) ||
          this.checkWinner(1,4,7) ||
          this.checkWinner(2,5,8) ||
          this.checkWinner(0,4,8) ||
          this.checkWinner(2,4,6)
        )
        this.props.navigation.navigate('End', { winner: this.state.player })
      })
    }
  }

  checkWinner = (p1, p2, p3) => {
    console.log(board[p1] == board[p2] && board[p2] == board[p3] && board[p1] == board[p3], 'checkwinner')
    let board = this.state.board;
    if (board[p1] == '-1' || board[p2] == '-1' || board[p2] == '-1') return false;
    else if (board[p1] == board[p2] && board[p2] == board[p3] && board[p1] == board[p3]) return true;
    
    return false
  }

  render() {
    let board = [];
    for(let i = 0; i < this.state.board.length; i++) {
      let title = '';
      if (this.state.board[i] == '1') title = 'O';
      if (this.state.board[i] == '0') title = 'X';
      if (this.state.board[i] == '-1') title = ' ';
      board.push(
        <View key={'key' + i} style={styles.key}>
          <Button title={ title } onPress={() => this.onPress(i)}/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.status}>
          <Text> {this.state.player} </Text>
          <View style={styles.keyboard}>
            { board }
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  status: {
    alignItems: 'center',
  },
  keyboard: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 104,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  key: {
    marginVertical: 4,
    marginHorizontal: 8,
    width: 40,
  }
});

export default connect(MapStateToProps, null)(Game)