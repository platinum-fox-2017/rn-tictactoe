import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOne: '',
            playerTwo: ''
        }
    }

    static navigationOptions = {
        title: 'Tic Tac Toe'
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Player One"
                        onChangeText={(playerOne) => this.setState({ playerOne })}
                        value={this.state.playerOne}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Player One"
                        onChangeText={(playerTwo) => this.setState({ playerTwo })}
                        value={this.state.playerTwo}
                    />
                </View>
                <TouchableOpacity
                    style={styles.btnStart}
                    onPress={() => console.log(`${this.state.playerOne} vs ${this.state.playerTwo}`)}>
                    <Text style={styles.btnText}>Start</Text>
                </TouchableOpacity>
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
    textInput: {
        width: 200,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15
    },
    textInputContainer: {
        margin: 10,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    btnStart: {
        marginTop: 20,
        width: 200,
        height: 30,
        backgroundColor: '#03A9F4',
    },
    btnText: {
        color: '#fff',
        textAlign: 'center'
    }
});

export default WelcomeScreen;