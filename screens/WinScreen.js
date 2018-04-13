import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class WinScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            params: this.props.navigation.state.params
        }
    }
    render() { 
        return ( 
            <Text>The winner is { params.winner }</Text>
         )
    }
}
 
export default WinScreen;