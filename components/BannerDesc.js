import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

class BannerDesc extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textBanner}> { this.props.text } </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  textBanner: {
    fontSize: 50,
    // color: '#283593',
    textAlign: 'center'
  }
})
export default BannerDesc