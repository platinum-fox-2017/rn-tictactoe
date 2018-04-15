import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { printBoard, printLetter } from '../store/game/game.actions'

class BoardComponent extends Component {
  constructor () {
    super()
    this.state = {
      numberofturn: 0
    }
  }

  componentDidMount () {
    this.props.printBoard(3)
  }

  print = () => {
    let letter;
    if (this.state.numberofturn%2) {
      letter = 'o'
    } else {
      letter = 'x'
    }
    return letter
  }

  updateTile (index) {
    this.setState(prevState => {
      return {
        numberofturn: prevState.numberofturn + 1
      }
    })
    let letter = this.print()
    this.props.printLetter(this.props.board.board, index, letter)
  }

  render() {
    return (
      <View>
        <Text>
          {JSON.stringify(this.props)}
        </Text>          
        <View style={styles.board}>
          { 
            this.props.board.board.map((el, i) => (
              <TouchableHighlight style={styles.key} key={i} onPress={ () => this.updateTile(i) }>
                <Text style={styles.text}>
                  { el }
                </Text>
              </TouchableHighlight> )
            ) 
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  board: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  key: {
    backgroundColor: '#364156',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#fff'
  },
  text: {
    color: '#CDCDCD',
    fontSize: 50
  }
})

const mapStateToProps = state => ({
  board: state.printBoardReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({
  printBoard,
  printLetter
}, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent);