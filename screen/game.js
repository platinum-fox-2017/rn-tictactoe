import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ComponentTictac from '../component/tictac'
import {gameOn} from '../store/action'


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      winner: false
     }
  }
  
  static navigationOptions = {
    title: 'Tic Tac Toe GameOn !'
  }

  componentDidMount(){
    this.props.gameOn({
      turn: this.props.store.playerOne,
      fill: 'X'
    })
  }
  
  componentDidUpdate(){
    const board = this.props.store.board
    for(let i= 0 ; i< 3; i++){
      let j = 0 
      if(board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2] && board[i][j] === 'X'){
        this.props.navigation.navigate('End',{win:this.props.store.playerOne})
      }else if(board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2] && board[i][j] === 'O'){
        this.props.navigation.navigate('End',{win:this.props.store.playerTwo})
      }
    }

    for(let j = 0 ; j < 3 ; j++){
      let i = 0
      if(board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j] && board[i][j] === 'X'){
        this.props.navigation.navigate('End' ,{win:this.props.store.playerTwo})
      }else if(board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j] && board[i][j] === 'O'){
        this.props.navigation.navigate('End',{win:this.props.store.playerTwo})
      } 
    }

    if(board[0][0] === board[1][1] && board[0][0]=== board [2][2] && board[0][0] === 'X' ||
      board[0][2] === board[1][1] && board[0][2]=== board [2][0] && board[0][2] === 'X' ){
        this.props.navigation.navigate('End',{win:this.props.store.playerOne})
    }else if (board[0][0] === board[1][1] && board[0][0]=== board [2][2] && board[0][0] === 'O' ||
      board[0][2] === board[1][1] && board[0][2]=== board [2][0] && board[0][2] === 'O' ){
        this.props.navigation.navigate('End',{win:this.props.store.playerTwo})
    } 
  }

  render() {
    return (  
      <View style={styles.container}>
        <View style={styles.player}>
          <Text>{this.props.store.playerOne}</Text>
          <Text> Versus </Text>
          <Text>{this.props.store.playerTwo}</Text>
        </View>
        <View style={{alignItems:'center', marginBottom:10}}>
          <Text> Turn:{this.props.store.turn}({this.props.store.fill}) </Text>
        </View>
        {this.props.store.board.map((cell,index) => 
          <ComponentTictac game={{cell:cell,index:index}} />
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

const mapStateToProps= (state) => {
  return {
    store: state.reducer
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    gameOn
  }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Game) ;



