import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

// import { calculateWinner } from '../store/tictactoe.actions';

function Square(props){
  return(
    <TouchableHighlight style={styles.button} onPress={props.onPress}>
      <Text style={styles.mark}>{ props.value }</Text>
    </TouchableHighlight>
  );
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handlePress(i) {
    const squares = this.state.squares.slice();

    if(calculateWinner(squares) || squares[i]){
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return <Square 
            value={this.state.squares[i]} 
            onPress={() => this.handlePress(i)} 
           />
  }

  componentDidMount() {
    console.log('did mount Board ==> ', this.props)
  }

  render() {
    const winner  = calculateWinner(this.state.squares);
    let   player  = (this.state.xIsNext) ? "X" : "O";
    let   status;

    if (winner) {
      status = `The Winner: ${winner}`;
    } else {
      status = `Player: ${player}`;
    }

    return (
      <View>
        <Text style={styles.status}>{status}</Text>
        <View style={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  status: {
    marginBottom: 10,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
  },
  button: {
    borderWidth: 1,
    borderColor: "#000",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  mark: {
    fontSize: 50,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: ("bold")
  }
});

// const mapStateToProps = state => ({
//   ...state
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   calculateWinner
// }, dispatch)

module.exports = Board;
// export default connect(mapStateToProps,mapDispatchToProps)(Board);
