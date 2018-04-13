import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlayer } from '../store/actions';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    static navigationOptions = {
        title: 'Tic Tac Toe'
    }

    render() { 
        return (  
            <View style={styles.container}>
                <Text>{this.props.store.playerOne} vs {this.props.store.playerTwo}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);