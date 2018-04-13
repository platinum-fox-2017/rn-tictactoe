import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import O_component from './O_component';

export default class Board_component extends Component {
    constructor() {
        super()
        this.state = {
            activePlayer: [],
            players: ['A', 'B'],
            playerInput: [],
            computeInput: [],
            result: '',
            boardData: []
        }
    }

    handlePressButton = (pos) => {
        console.log(pos)
        this.setState(prevState => ({
            boardData: [...prevState.boardData, pos]
        }))
    }

    render() {
        return (
        <View style={ styles.container } >
            <Text> Play! </Text>
            <Text> { this.state.boardData } </Text>
            <View style={ styles.detailbox }>
                <TouchableHighlight onPress={ () => this.handlePressButton(1) } style={styles.square}>
                    <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 1) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this.handlePressButton(2) }  style={styles.square}>
                     <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 2) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this.handlePressButton(3) }  style={styles.square}>
                     <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 3) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
            </View>
            <View style={ styles.detailbox }>
                <TouchableHighlight onPress={ () => this.handlePressButton(4) } style={styles.square}>
                     <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 4) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this.handlePressButton(5) }  style={styles.square}>
                     <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 5) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this.handlePressButton(6) }  style={styles.square}>
                     <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 6) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
            </View>
            <View style={ styles.detailbox }>
                <TouchableHighlight onPress={ () => this.handlePressButton(7) } style={styles.square}>
                     <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 7) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this.handlePressButton(8) }  style={styles.square}>
                     <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 8) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this.handlePressButton(9) }  style={styles.square}>
                     <View style={ styles.selectedItem }>
                        {
                            this.state.boardData.map(i => {
                                if (i === 9) {
                                    return (
                                        <Text style={ styles.textItem }>X</Text>
                                    )
                                }
                            }) 
                        }
                    </View>
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
    },
    board: {
        marginTop: 10,
        borderWidth: 3,
        width: 312,
        height: 312
    },
    line: {
        backgroundColor: '#000',
        height: 306,
        width: 3,
        position: 'absolute',
        transform : [{ translateX: 100 }]
    },
    square: {
        borderWidth: 3,
        width: 70,
        height: 70,
    },
    detailbox: {
        flexDirection: 'row',
    },
    selectedItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textItem: {
        fontSize: 25,
        fontWeight: 'bold',
    }

});
