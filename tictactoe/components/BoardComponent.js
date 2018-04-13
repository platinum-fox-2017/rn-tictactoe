import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { printBoard } from '../store/game/game.actions'

class BoardComponent extends Component {
  componentDidMount () {
    this.props.printBoard(3)
  }

  render() {
    return (
      <View>
        <Text>
          {JSON.stringify(this.props)}
        </Text>          
        <View style={styles.keyboard}>
          { this.props.board.board.map((el, i) => (<View style={styles.key}><Button title={el} /></View>)) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboard: {
    maxWidth: 300,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  key: {
    width: 80,
    height: 80,
    marginVertical: 4,
    marginHorizontal: 4,
    paddingLeft: 5,
    paddingRight: 5
  }
})

const mapStateToProps = state => ({
  board: state.printBoardReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({
  printBoard
}, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent);