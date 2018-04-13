import React, { Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { touchBoard , winner} from '../store/action'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'board',
      winner: null
    }
  }
  checkSebaris = (baris,player) => {
    const { boardData } = this.props.redux
    if (boardData[baris][0] == player) {
      if (boardData[baris][1] == player) {
        if (boardData[baris][2] == player) {
          return true 
        } 
      }
    }
    return false
  }

  
  checkSerongKanan = (player) => {
    const { boardData } = this.props.redux
    if (boardData[0][0] == player) {
      if (boardData[1][1] == player) {
        if (boardData[2][2] == player) {
          return true 
        } 
      }
    }
    return false
  }

  checkSerongKiri = (player) => {
    const { boardData } = this.props.redux
    if (boardData[0][2] == player) {
      if (boardData[1][1] == player) {
        if (boardData[2][0] == player) {
          return true 
        } 
      }
    }
    return false
  }

  checkKebawah = (kolom,player) => {
    const { boardData } = this.props.redux
    if (boardData[0][kolom] == player) {
      if (boardData[1][kolom] == player) {
        if (boardData[2][kolom] == player) {
          return true 
        } 
      }
    }
    return false
  }
  isGameOver = () => {
    const boardData = this.props.redux.boardData
    let isOver = 0
    for (var i = 0; i <  boardData.length; i++) {
      for (var j = 0; j < boardData[i].length; j++)  {
        if (boardData[i][j] == 0) {
           isOver++
        }
      }
    }
    if (isOver == 0) {
      if(!this.theWinner()) {
        this.setState({winner: 0})
        this.props.winner(0)
      } else {
        this.props.winner(this.state.winner)
      }
    }

  }
  theWinner = () => {
    
    for(var i = 0; i < 2; i++) {
      if (this.checkKebawah(i,1)) {
        this.setState({winner: 1})
        return true
      }
    }

    for(var i = 0; i < 2; i++) {
      if (this.checkKebawah(i,2)) {
        this.setState({winner: 2})
        return true
      }
    }

    for(var i = 0; i < 2; i++) {
      if (this.checkSebaris(i,1)) {
        this.setState({winner: 1})
        return true
      }
    }

    for(var i = 0; i < 2; i++) {
      if (this.checkSebaris(i,2)) {
        this.setState({winner: 2})
        return true
      }
    }
    if (this.checkSerongKanan(1)) {
        this.setState({winner: 1})
        return true
    }

    if (this.checkSerongKanan(2)) {
        this.setState({winner: 2})
        return true
    }

    if (this.checkSerongKiri(1)) {
        this.setState({winner: 1})
        return true
    }

    if (this.checkSerongKiri(2)) {
        this.setState({winner: 2})
        return true
    }
    return false
  }
  computerTurn = ()  => {
    const boardData = this.props.redux.boardData
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
  
    this.props.touchBoard(boardData, 0)
  }

  touchBoard = (x,y) => {
    const boardData = this.props.redux.boardData
    let activePlayer = this.props.redux.activePlayer
    if (boardData[x][y] == 0) {
      if (activePlayer == 0) {
          boardData[x][y] = 1
          activePlayer = 1
        } else {
          boardData[x][y] = 2
          activePlayer = 0
        }
        const newBoard = boardData
        this.props.touchBoard(newBoard, 1)
        this.computerTurn()
        this.isGameOver()
    }      
  }

  render() {
    const boardData = this.props.redux.boardData
    const activePlayer = this.props.redux.activePlayer
    return (
      <View>
        <Text>{ this.props.redux.winner } </Text>
        { this.state.winner == 1 &&  <Text> You Win </Text> }
        { this.state.winner == 2 &&  <Text> Computer Win </Text> }
        { this.state.winner == 0 &&  <Text> Seri </Text> }
        { activePlayer === 0 ? <Text> Your Turn </Text> : <Text> Computer Turn </Text> }
          <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 40
          }}>
            <TouchableHighlight onPress={ () => this.touchBoard(0,0) }>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}>
                { boardData[0][0] == 1 && <Text> o </Text> }
                { boardData[0][0] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(0,1) }>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
                { boardData[0][1] == 1 && <Text> o </Text> }
                { boardData[0][1] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(0,2) }>
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
                { boardData[0][2] == 1 && <Text> o </Text> }
                { boardData[0][2] == 2 && <Text> x </Text> }
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
                { boardData[1][0] == 1 && <Text> o </Text> }
                { boardData[1][0] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(1,1) }>
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} >
                { boardData[1][1] == 1 && <Text> o </Text> }
                { boardData[1][1] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(1,2) }>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >
                { boardData[1][2] == 1 && <Text> o </Text> }
                { boardData[1][2] == 2 && <Text> x </Text> }
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
                { boardData[2][0] == 1 && <Text> o </Text> }
                { boardData[2][0] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(2,1) }>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >
                { boardData[2][1] == 1 && <Text> o </Text> }
                { boardData[2][1] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => this.touchBoard(2,2) }>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
                { boardData[2][2] == 1 && <Text> o </Text> }
                { boardData[2][2] == 2 && <Text> x </Text> }
              </View>
            </TouchableHighlight>
          </View>
        
        <Button style={ { marginTop:100  }} onPress={ () => this.props.navigation.navigate('GameOver') } title="GameOver" />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ touchBoard, winner }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Board);
