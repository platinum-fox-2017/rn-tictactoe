import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';

export default class Home_screen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
    return (
        <View>
        <Text> Home - Login </Text>
        <Button
            title="Boards"
            onPress={() => this.props.navigation.navigate('Board')}
        />
        </View>
    );
    }
}
