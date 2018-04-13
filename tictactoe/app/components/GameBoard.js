import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x_score: 0, 
      o_score: 0 
    }

  }

  generateRows() {
    return this.rows.map((row, index) => {
      return (
        <View style={styles.row} key={index}>
          {this.generateBlocks(row, index)}
        </View>
      );
    });
  }

  generateBlocks(row, row_index) {
    return row.map((block, index) => {
      let id = this.ids[row_index][index];
      return (
        <TouchableHighlight 
          key={index} 
          onPress={this.onMakeMove.bind(this, row_index, index)} 
          underlayColor={"#CCC"} 
          style={styles.block}>
            <Text style={styles.block_text}>
            {this.state.moves[id]}
            </Text>
        </TouchableHighlight>        
      );
    });
  }

  render() {
    return (
      <View style={styles.board_container}>
        <View style={styles.board}>
        {this.generateRows()}
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
    flex: 9
  },
  board: {
    flex: 7,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
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
