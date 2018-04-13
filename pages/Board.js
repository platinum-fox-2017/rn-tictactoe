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
      activePlayer: 0
    }
  }
  
  touchBoard = (x,y) => {
      if (this.state.activePlayer == 0) {
        this.state.boardData[0][0] = 1
        this.state.activePlayer = 1
      } else {
        this.state.boardData[0][0] = 2
        this.state.activePlayer = 0
      }
      const newBoard = this.state.boardData

      this.setState({ boardData: newBoard, activePlayer: this.state.activePlayer })

  }

  render() {
    return (
      <View>
        <Text>{ this.state.text } </Text>
        <Text>{ JSON.stringify(this.state.boardData) } </Text>
        <Text>{ JSON.stringify(this.state.activePlayer) } </Text>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40
          }}>
          <TouchableHighlight onPress={ () => {
            if (this.state.activePlayer == 0) {
              this.state.boardData[0][0] = 1
              this.state.activePlayer = 1
            } else {
              this.state.boardData[0][0] = 2
              this.state.activePlayer = 0
            }
            const newBoard = this.state.boardData

            this.setState({ boardData: newBoard, activePlayer: this.state.activePlayer })
          } }>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}>
            </View>
            </TouchableHighlight>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />

            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          </View>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40
          }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          </View>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40
          }}>
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          </View>
        
        <Button onPress={ () => this.props.navigation.navigate('GameOver') } title="GameOver" />
      </View>
    );
  }
}

export default Board;
