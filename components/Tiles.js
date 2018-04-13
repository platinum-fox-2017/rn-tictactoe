import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import WhiteText from './WhiteText';

export default class TouchAble extends React.Component {
  render() {
    const props = this.props
    return (
      <TouchableHighlight
         style={ styles.touchAble }
         onPress={ props.onPress }
      >
        <WhiteText content={ props.content }/>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchAble: {
    alignItems: 'center',
    backgroundColor: '#00bfa5',
    padding: 10,
    width: 100,
    height: 100
  }
});
