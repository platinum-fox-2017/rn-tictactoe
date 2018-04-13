import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import O_component from './O_component';

export default class Board_component extends Component {
    constructor() {
        super()
        this.state = {
            activePlayer: [],
            players: ['A', 'B'],
            boardData: []
        }
    }

    render() {
        return (
        <View style={ styles.container } >
        
            <Text> Play the games! </Text>
            <View style={ styles.board } >
                <View style={ styles.line }>

                </View>

                <View style={[styles.line, {
                    transform: [{
                        translateX: 200
                    }]
                }]}>
                </View>

                <View style={[styles.line, {
                    height: 3,
                    width: 306,
                    transform: [{
                        translateY: 100
                    }]
                }]}>
                </View>
                
                <View style={[styles.line, {
                    height: 3,
                    width: 306,
                    transform: [{
                        translateY: 200
                    }]
                }]}>
                </View>

                < O_component />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
    }

});
