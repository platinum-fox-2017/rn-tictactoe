import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native'

export default class Game extends Component {
  constructor () {
    super()
    this.state = {
      board: [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      turn: [{
        name: 'Fadel',
        answer: 'X'
      },{
        name: 'Putra',
        answer: 'O'
      }],
      counter: 0,
      winner: null
    }
  }

  _checkPattern = () => {
    let board = this.state.board
    let turn = this.state.turn
    if(board[0]===board[1] && board[1]===board[2] && board[2]==='X'){
      this.setState({
        winner: turn[0].name
      })
      this.props.navigation.navigate('End')
    } else if(board[0]===board[1] && board[1]===board[2] && board[2]==='O'){
      this.setState({
        winner: turn[1].name
      })
      this.props.navigation.navigate('End')
    } else if(board[3]===board[4] && board[4]===board[5] && board[5]==='O'){
      this.setState({
        winner: turn[1].name
      })
      this.props.navigation.navigate('End')
    } else if(board[3]===board[4] && board[4]===board[5] && board[5]==='X'){
      this.setState({
        winner: turn[0].name
      })
      this.props.navigation.navigate('End')
    } else if(board[6]===board[7] && board[7]===board[8] && board[8]==='X'){
      this.setState({
        winner: turn[0].name
      })
      this.props.navigation.navigate('End')
    } else if(board[6]===board[7] && board[7]===board[8] && board[8]==='O'){
      this.setState({
        winner: turn[1].name
      })
      this.props.navigation.navigate('End')
    } else if(board[0]===board[3] && board[3]===board[6] && board[6]==='O'){
      this.setState({
        winner: turn[1].name
      })
      this.props.navigation.navigate('End')
    } else if(board[0]===board[3] && board[3]===board[6] && board[6]==='X'){
      this.setState({
        winner: turn[0].name
      })
      this.props.navigation.navigate('End')
    } else if(board[1]===board[4] && board[4]===board[7] && board[7]==='X'){
      this.setState({
        winner: turn[0].name
      })
      this.props.navigation.navigate('End')
    } else if(board[1]===board[4] && board[4]===board[7] && board[7]==='O'){
      this.setState({
        winner: turn[1].name
      })
      this.props.navigation.navigate('End')
    } else if(board[2]===board[5] && board[8]===board[5] && board[8]==='O'){
      this.setState({
        winner: turn[1].name
      })
      this.props.navigation.navigate('End')
    } else if(board[2]===board[5] && board[8]===board[5] && board[8]==='X'){
      this.setState({
        winner: turn[0].name
      })
      this.props.navigation.navigate('End')
    } else if(board[0]===board[4] && board[8]===board[4] && board[8]==='X'){
      this.setState({
        winner: turn[0].name
      })
      this.props.navigation.navigate('End')
    } else if(board[0]===board[4] && board[8]===board[4] && board[8]==='O'){
      this.setState({
        winner: turn[1].name
      })
      this.props.navigation.navigate('End')
    } else if(board[2]===board[4] && board[6]===board[4] && board[6]==='O'){
      this.setState({
        winner: turn[1].name
      })
      this.props.navigation.navigate('End')
    } else if(board[2]===board[4] && board[6]===board[4] && board[6]==='X'){
      this.setState({
        winner: turn[0].name
      })
      this.props.navigation.navigate('End')
    }
  }

  _onPress = (key) => {
    console.log(key)
    let board = this.state.board
    board[key] = this.state.turn[this.state.counter%2].answer
    this.setState({
      board
    })
    this.setState({
      counter: this.state.counter+1
    })
    this._checkPattern()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <Text style={styles.info}>Turn: {this.state.turn[this.state.counter%2].name}</Text>
        <Text style={styles.info}>Winner: {this.state.winner}</Text>
        <View style={styles.board}>
          {
            this.state.board.map((val, index) => (
              <TouchableHighlight onPress={() => this._onPress(index)} style={styles.inner_board}>
                <Text style={styles.text}>{this.state.board[index]}</Text>
              </TouchableHighlight>
            ))
          }
        </View>
      </View>
    )
  }
}



const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center'
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  info: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  board: {
    marginTop: 50,
    width: 300,
    height: 300,
    backgroundColor: 'grey',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  inner_board: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'darkgrey'
  },
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

