import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlayer, turn } from '../store/actions';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerTurn: '',
            symbol: ''
        }
    }

    static navigationOptions = {
        title: 'Tic Tac Toe'
    }

    componentDidMount() {
        this.setState({
            playerTurn: this.props.store.playerOne,
            symbol: 'X'
        })
    }

    turn = (row, col) => {
        let board = this.props.store.boardData;
        board[row][col] = this.state.symbol;
        if(this.state.playerTurn === this.props.store.playerOne){
            this.setState({
                playerTurn: this.props.store.playerTwo,
                symbol: 'O'
            })
        }else{
            this.setState({
                playerTurn: this.props.store.playerOne,
                symbol: 'X'
            })
        }
        this.props.turn(board)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textVs}>{this.props.store.playerOne} vs {this.props.store.playerTwo}</Text>
                <Text> Player Turn: {this.state.playerTurn} ({this.state.symbol})</Text>
                {
                    this.props.store.boardData.map((row, i) => {
                        return (
                            <View key={i} style={styles.rowContainer}>
                                <TouchableOpacity
                                    style={styles.box}
                                    onPress={() => this.turn(i, 0)}>
                                    <Text> {row[0]} </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.box}
                                    onPress={() => this.turn(i, 1)}>
                                    <Text> {row[1]} </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.box}
                                    onPress={() => this.turn(i, 2)}>
                                    <Text> {row[2]} </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textVs: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    rowContainer: {
        flexDirection: 'row'
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        margin: 2,
        backgroundColor: 'powderblue'
    }
});

const mapStateToProps = state => {
    return {
        store: state.reducers
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setPlayer,
    turn
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board);