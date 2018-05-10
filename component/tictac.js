import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {gameOn,setBoard} from '../store/action' 

class ComponentTictac  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  playGame(i,j){
    const board = this.props.store.board
    if(board[i][j] === ''){
      board[i][j] = this.props.store.fill
      if(this.props.store.playerOne === this.props.store.turn){
        this.props.gameOn({
          turn: this.props.store.playerTwo,
          fill:'O'
        })
      }else{
        this.props.gameOn({
          turn: this.props.store.playerOne,
          fill:'X'
        })
      }
    }
    this.props.setBoard(board)
  }

  

  render() { 
    return (
    <View style={styles.board} key={this.props.game.index}>
      <TouchableOpacity 
        style={styles.box}
        onPress={()=> this.playGame(this.props.game.index,0)}>
        <Text>{this.props.game.cell[0]} </Text>
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.box}
        onPress={()=> this.playGame(this.props.game.index,1)}>
        <Text>{this.props.game.cell[1]} </Text>
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.box}
        onPress={()=> this.playGame(this.props.game.index,2)}>
        <Text>{this.props.game.cell[2]} </Text>
      </TouchableOpacity> 
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
  setBoard,
  gameOn
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps) (ComponentTictac) ;