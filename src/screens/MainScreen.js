import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class MainScreen extends Component {
  constructor(){
    super()
    this.state = {
      boardData: ['x','o','x','o','x','','','','']
    }
  }

  render() {
    console.log(this.state.boardData)
    return (
      <View style={styles.container}>
        {
          this.state.boardData.map((data) =>
          <TouchableHighlight style={styles.button}>
            <Text> X </Text>
          </TouchableHighlight>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#fff'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});

export default MainScreen;