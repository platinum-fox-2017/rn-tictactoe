import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlayer } from '../store/actions';

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

    setPlayerLocal = () => {
        this.props.setPlayer({
            playerOne: this.state.playerOne,
            playerTwo: this.state.playerTwo
        })
        this.props.navigation.navigate('Board')
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
                    onPress={this.setPlayerLocal}>
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

const mapStateToProps = state => {
    return {
        store: state.reducers
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setPlayer
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);