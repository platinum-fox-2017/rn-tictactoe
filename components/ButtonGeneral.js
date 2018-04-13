import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native'

class ButtonGeneral extends Component {
  render() {
    return (
      <View style={{
        marginHorizontal: '30%',
        backgroundColor: (this.props.color) ? this.props.color :'#0d47a1',
        borderRadius: 5,
        color: 'white'
        }}>
        <Button 
          title={this.props.text}
          color='white'
          disabled={ this.props.color ? true : false}
        />
      </View>
    )
  }
};

export default ButtonGeneral