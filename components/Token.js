import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class WhiteText extends React.Component {
  render() {
    const props = this.props
    return (
      <Text style={styles.Token}>{ props.content }</Text>
    );
  }
}

const styles = StyleSheet.create({
  Token: {
    color: '#eeeeee',
    height: '25%',
    width: '25%',
  },
});
