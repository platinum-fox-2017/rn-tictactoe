import React, { Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight
} from 'react-native'

class Board extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      text: 'board',
      boardData: [[0,0,0],[0,0,0],[0,0,0]],
      nullBoard: [],
      activePlayer: 0
    }
  }
  computerTurn = ()  => {
    const { boardData } = this.state
    let getBoard = false
    let nullBoard = []
    for (var i = 0; i <  boardData.length; i++) {
      for (var j = 0; j < boardData[i].length; j++)  {
        if (boardData[i][j] == 0) {
           boardData[i][j] = 2
           getBoard = true
          break
        }
      }
      if (getBoard) {
        break; 
      }
    }
  
    this.setState({ boardData: boardData, activePlayer: 0 })
  }

  touchBoard = (x,y) => {
    if (this.state.boardData[x][y] == 0) {
      if (this.state.activePlayer == 0) {
          this.state.boardData[x][y] = 1
          this.state.activePlayer = 1
        } else {
          this.state.boardData[x][y] = 2
          this.state.activePlayer = 0
        }
        const newBoard = this.state.boardData
        this.setState({ boardData: newBoard, activePlayer: this.state.activePlayer })
        this.computerTurn()
    }      
  }

  render() {
    return (
      <View>
        <Text>{ this.state.text } </Text>
        { this.state.activePlayer === 0 ? <Text> Your Turn </Text> : <Text> Computer Turn </Text> }
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40
          }}>
            <TouchableHighlight onPress={ () => this.touchBoard(0,0) }>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}>
                { this.state.boardData[0][0] == 1 && <Text> o </Text> }
                { this.state.boardData[0][0] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(0,1) }>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
                { this.state.boardData[0][1] == 1 && <Text> o </Text> }
                { this.state.boardData[0][1] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(0,2) }>
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
                { this.state.boardData[0][2] == 1 && <Text> o </Text> }
                { this.state.boardData[0][2] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
          </View>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40
          }}>
            <TouchableHighlight onPress={ () => this.touchBoard(1,0) }>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
                { this.state.boardData[1][0] == 1 && <Text> o </Text> }
                { this.state.boardData[1][0] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(1,1) }>
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} >
                { this.state.boardData[1][1] == 1 && <Text> o </Text> }
                { this.state.boardData[1][1] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(1,2) }>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >
                { this.state.boardData[1][2] == 1 && <Text> o </Text> }
                { this.state.boardData[1][2] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
          </View>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40
          }}>
            <TouchableHighlight onPress={ () => this.touchBoard(2,0) }>
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
                { this.state.boardData[2][0] == 1 && <Text> o </Text> }
                { this.state.boardData[2][0] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(2,1) }>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >
                { this.state.boardData[2][1] == 1 && <Text> o </Text> }
                { this.state.boardData[2][1] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(2,2) }>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
                { this.state.boardData[2][2] == 1 && <Text> o </Text> }
                { this.state.boardData[2][2] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
          </View>
        
        <Button style={ { marginTop:100  }} onPress={ () => this.props.navigation.navigate('GameOver') } title="GameOver" />
      </View>
    );
  }
}

export default Board;
