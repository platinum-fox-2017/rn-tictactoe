import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {setPlayer} from '../store/action'

class ComponentHome extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      playerOne: 'playerOne',
      playerTwo: 'playerTwo'
     }
  }
  componentDidUpdate(){
    this.props.setPlayer({
      playerOne: this.state.playerOne,
      playerTwo: this.state.playerTwo
    })
  }
  
  render() { 
    return ( 
        <View>
          <TextInput
          style={{borderColor: 'black', borderWidth: 1, height: 30, width: 100, marginBottom: 5}}
          onChangeText={(name) => this.setState({playerOne:name})}
          value={this.state.playerOne}
          />
          <TextInput
          style={{borderColor: 'black', borderWidth: 1, height: 30, width: 100}}
          onChangeText={(name) => this.setState({playerTwo:name})}
          value={this.state.playerTwo}
          />
        </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setPlayer,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ComponentHome);