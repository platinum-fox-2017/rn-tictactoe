import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class WhiteText extends React.Component {
  render() {
    const props = this.props
    return (
      <Text style={styles.whiteText}>{ props.content }</Text>
    );
  }
}

const styles = StyleSheet.create({
  whiteText: {
    color: '#eeeeee'
  },
});
