import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import TitleBar from '../components/TitleBar'

class Game extends Component {
  guessTile (e) {
    console.log(e)
  }

  render () {
    return (
      <View>
        <TitleBar text={'Tic Tac Toe '} />
        <View style={ styles.board }>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='X' color='white' onPress={() => this.guessTile('X')}/>
          </View>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='O' color='white' onPress={() => this.guessTile('O')}/>
          </View>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='X' color='white' onPress={() => this.guessTile('X')}/>
          </View>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='X' color='white' onPress={() => this.guessTile('X')}/>
          </View>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='O' color='white' onPress={() => this.guessTile('O')}/>
          </View>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='X' color='white' onPress={() => this.guessTile('X')}/>
          </View>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='X' color='white' onPress={() => this.guessTile('X')}/>
          </View>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='O' color='white' onPress={() => this.guessTile('O')}/>
          </View>
          <View style={styles.tile}>
            <Button style={styles.tileText} title='X' color='white' onPress={() => this.guessTile('X')}/>
          </View>
        </View>
        <Text> Masuk game board </Text>
      </View>
    )
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
    // color: '#fff',
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
  }
})

export default Game