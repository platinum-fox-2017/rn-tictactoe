import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.player}>hello {this.props.navigation.state.params.player ? this.props.navigation.state.params.player :"anonymous"}</Text>
       <TouchableWithoutFeedback>
         <View style={styles.board}>
            <View
              style={styles.line}
            />
            <View
              style={[styles.line, {
                width: 3,
                height: 306,
                transform: [
                  {translateX: 200}
                ]
              }]}
            />
            <View
              style={[styles.line, {
                width: 306,
                height: 3,
                transform: [
                  {translateY: 100}
                ]
              }]}
            />
            <View
              style={[styles.line, {
                width: 306,
                height: 3,
                transform: [
                  {translateY: 200}
                ]
              }]}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: '#000'
  },
  line: {
    position: 'absolute',
    width: 3,
    height: 306,
    backgroundColor: '#000',
    transform: [
      {translateX: 100}
    ]
  },
  player: {
    marginBottom: 50,
  }
});