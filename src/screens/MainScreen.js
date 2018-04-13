import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class MainScreen extends Component {
  constructor(){
    super()
    this.state = {
      boardData: [['','',''],['','',''],['','','']],
      turnPlayer: 0
    }
  }

  handlePress = (indexi, indexj) => {
    console.log(indexi, indexj)
    let board = this.state.boardData
    let turnPlayer = this.state.turnPlayer
    if (turnPlayer === 0) {
      board[indexi][indexj] = 'x'
      turnPlayer = 1
    }else{
      board[indexi][indexj] = 'o'
      turnPlayer = 0
    }
    this.setState({
      boardData: board,
      turnPlayer: turnPlayer
    })
  }

  // checkWin = () => {
  //   let board = this.state.boardData

  // }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.boardData.map((datai, indexi) =>
            datai.map( (dataj, indexj) =>
              <TouchableHighlight key={ indexj } style={styles.button} onPress={ () => this.handlePress(indexi,indexj) }>
                <Text style={ styles.cell }> { dataj } </Text>
              </TouchableHighlight>
            )
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderColor: '#d6d7da'
  },
  cell: {
    width: 80,
    textAlign: 'center'
  },
});

export default MainScreen;