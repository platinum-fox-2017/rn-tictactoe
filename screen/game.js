import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native'


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      playerOne: '',
      playerTwo: '',
      board: [['','',''],['','',''],['','','']],
      turn: '',
      fill: '',
      winner: false
     }
  }
  
  static navigationOptions = {
    title: 'Tic Tac Toe GameOn !'
  }
  componentDidMount(){
    this.setState({
      playerOne: this.props.navigation.state.params.name.playerOne,
      playerTwo: this.props.navigation.state.params.name.playerTwo,
      turn: this.props.navigation.state.params.name.playerOne,
      fill: 'X'
    })
  } 

  playGame(i,j){
    const board = this.state.board
    if(board[i][j] === ''){
      board[i][j] = this.state.fill
      if(this.state.playerOne === this.state.turn){
        this.setState({
          turn: this.state.playerTwo,
          fill:'O'
        })
      }else{
        this.setState({
          turn: this.state.playerOne,
          fill:'X'
        })
      }
    }
    this.setState({
      board: board
    })
  }

  componentDidUpdate(){
    const board = this.state.board
    for(let i= 0 ; i< 3; i++){
      let j = 0 
      if(board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2] && board[i][j] === 'X'){
        this.props.navigation.navigate('End',{win:this.state.playerOne})
      }else if(board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2] && board[i][j] === 'O'){
        this.props.navigation.navigate('End',{win:this.state.playerTwo})
      }
    }

    for(let j = 0 ; j < 3 ; j++){
      let i = 0
      if(board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j] && board[i][j] === 'X'){
        this.props.navigation.navigate('End' ,{win:this.state.playerTwo})
      }else if(board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j] && board[i][j] === 'O'){
        this.props.navigation.navigate('End',{win:this.state.playerTwo})
      } 
    }

    if(board[0][0] === board[1][1] && board[0][0]=== board [2][2] && board[0][0] === 'X' ||
      board[0][2] === board[1][1] && board[0][2]=== board [2][0] && board[0][2] === 'X' ){
        this.props.navigation.navigate('End',{win:this.state.playerOne})
    }else if (board[0][0] === board[1][1] && board[0][0]=== board [2][2] && board[0][0] === 'O' ||
      board[0][2] === board[1][1] && board[0][2]=== board [2][0] && board[0][2] === 'O' ){
        this.props.navigation.navigate('End',{win:this.state.playerTwo})
    }
  }

  render() {
    return (  
      <View style={styles.container}>
        <View style={styles.player}>
          <Text>{this.state.playerOne}</Text>
          <Text> Versus </Text>
          <Text>{this.state.playerTwo}</Text>
        </View>
        <View style={{alignItems:'center', marginBottom:10}}>
          <Text> Turn:{this.state.turn}({this.state.fill}) </Text>
        </View>
        {this.state.board.map((cell,index) => 
          <View style={styles.board} key={index}>
            <TouchableOpacity 
              style={styles.box}
              onPress={()=> this.playGame(index,0)}>
              <Text>{cell[0]} </Text>
            </TouchableOpacity> 
            <TouchableOpacity 
              style={styles.box}
              onPress={()=> this.playGame(index,1)}>
              <Text>{cell[1]} </Text>
            </TouchableOpacity> 
            <TouchableOpacity 
              style={styles.box}
              onPress={()=> this.playGame(index,2)}>
              <Text>{cell[2]} </Text>
            </TouchableOpacity> 
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  player:{
    marginTop: 110,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  board:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box:{
    flexWrap: 'wrap',
    flex: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 2,
    backgroundColor: 'teal'
  }
})
 
export default Game ;



