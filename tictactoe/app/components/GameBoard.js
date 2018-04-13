import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';
import Blocks from './Blocks'

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x_score: 0, 
      o_score: 0 
    }
  }

  render() {
    return (
      <View style={styles.board_container}>
        <View style={styles.board}>
          <Blocks />
          <Blocks />
          <Blocks />
        </View>
        
        <View style={styles.scores_container}>
          <View style={styles.score}>
            <Text style={styles.user_score}>{this.state.x_score}</Text>
            <Text style={styles.username}>{this.props.username} (x)</Text>
          </View>

          <View style={styles.score}>
            <Text style={styles.user_score}>{this.state.o_score}</Text>
            <Text style={styles.username}>{this.props.rival_username} (o)</Text>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  board_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  board: {
    // flex: 3,
    flexDirection: 'column'
  },
  row: {
    flex: 3,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  block: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  block_text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  scores_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    flex: 1,
    alignItems: 'center'
  },
  user_score: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  username: {
    fontSize: 20
  }
});

export default GameBoard;
