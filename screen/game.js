import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      userInput: [],
      result : false
      }
  }

  static navigationOptions = {
    title: 'Tic Tac Toe Game On !'
  }

  lose(){
    this.props.navigation.navigate('End',{result:false})
  }

  render() {
    if(this.state.result === false){
      return ( 
        <View style={styles.container}>
          <View style={styles.board}>
            <View style={styles.line}/>
            <View style={[styles.line,{transform:[{translateX:200}]}]}/>
            <View style={[styles.line,{height: 3,width: 306,transform: [{translateY: 200}]}]}/>
            <View style={[styles.line,{height: 3,width: 306,transform: [{translateY: 100}]}]}/>
          </View>
        </View>
       )
    }else{
      this.lose()
    } 
  }
}
 
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    marginTop: 20
  },
  board: {
    borderWidth: 3,
    height: 312,
    width: 312
  },
  line:{
    backgroundColor: '#000',
    height: 306,
    width: 3,
    position: 'absolute',
    transform:[
      {translateX: 100}
    ]
  }
})


const mapStateToProps = state => {
  return {
    input: state.inputUser
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPlayer,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

export default (Game) ;