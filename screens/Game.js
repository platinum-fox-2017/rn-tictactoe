import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'
import TitleBar from '../components/TitleBar'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      board: []
    }
  }
  guessTile (e) {
    let index = e-1
    let updateBoard = [...this.state.board]
    updateBoard[index] = 
    <View style={styles.tile}>
      <Button style={styles.tileText} id={`tile-${e}`} title='X' color='white' onPress={() => this.guessTile(e)}/>
    </View>
    this.setState({
      ...this.state,
      board: updateBoard
    })
  }

  win () {
    this.props.navigation.navigate('Win')
  }

  lose () {
    this.props.navigation.navigate('Lose')
  }

  render () {
    return (
      <View>
        <TitleBar text={'Tic Tac Toe '} />
        <View style={ styles.board }>
          {
            this.state.board.map(tile => (
              tile
            ))
          }
        </View>
        <View style={{ justifyContent: 'center', alignItems:'center', marginTop: 25 }}>
          <TouchableHighlight>
            <Text style={styles.nav} onPress={ () => this.win() }> Win </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.nav} onPress={ () => this.lose() }> Lose </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
  componentDidMount () {
    let generateBoard  = []
    for (let i = 1; i < 10; i++) {
      generateBoard.push(
        <View style={styles.tile}>
          <Button style={styles.tileText} id={`tile-${i}`} title='' color='white' onPress={() => this.guessTile(i)}/>
        </View>
      )
    }
    this.setState({
      board: generateBoard
    })
  }
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  tileText: {
    fontSize: 50,
  },
  tile: {
    backgroundColor: '#00c853',
    borderRadius: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    marginVertical: 4,
  },
  nav: {
    fontSize: 30,
    color: '#01579b',
    marginBottom: 15
  }
})

export default Game