import React, { Component } from 'react';
import { 
  View, 
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  setActivePlayer,
  setPlayer
} from '../../redux/game.action';

class GameScreenComponents extends Component {
  constructor () {
    super()
    this.state = {
      board: [
        '','','','','','','','',''
      ],
      activePlayer: 1
    }
  }

  onPress = (idx) => {
    let newBoard = []
    for(let i = 0; i < this.state.board.length; i++) {
      newBoard.push(this.state.board[i])
    }

    let changePlayer = false
    for(let i = 0; i < newBoard.length; i++) {
      if(i === idx && newBoard[i] === '') {
        if (this.state.activePlayer === 1) {
          newBoard[i] = 'X'
          changePlayer = true
        } else {
          newBoard[i] = 'O'
          changePlayer = true
        }
      }
    }

    this.setState({
      ...this.state,
      board: newBoard,
    })

    if(this.state.activePlayer === 1 && changePlayer === true) {
      this.setState({
        ...this.state,
        board: newBoard,        
        activePlayer: 2
      })
    } else if (this.state.activePlayer === 2 && changePlayer === true) {
      this.setState({
        ...this.state,
        board: newBoard,
        activePlayer: 1
      })
    }
  }

  render() {
    return (
      <View>
        <Text>
          { `Player Turn : ${this.state.activePlayer}`}
        </Text>
        <View style={ styles.container }>
          { this.state.board.map((el,idx) => {
            return (
              <TouchableHighlight
                style={styles.button}
                onPress={() => { this.onPress(idx)}}
                >
                <Text> { this.state.board[idx] } </Text>
            </TouchableHighlight>
            )
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 120,
    height: 150,
    borderColor: 'red',
    borderWidth: 1
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})




const mapStateToProps= (state) => {
  return {
    activePlayer: state.gameReducer.activePlayer
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActivePlayer,
  setPlayer
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(GameScreenComponents);

