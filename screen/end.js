import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableHighlight,Button } from 'react-native';
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {resetGame} from '../store/action'

class End extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  reset () {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Start' })],
    });
    // this.props.resetGame()
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 16}}> ~ {this.props.navigation.state.params.win} ~ </Text>
        <Text style={styles.font}> You WIN the game ! </Text>
        <Button
        onPress={()=> this.reset()}
        title='Play Again'
        style= {{marginTop:10}} 
        />
      </View>
    )
  } 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  font:{
    fontSize: 20
  }
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  resetGame,
}, dispatch)

export default connect(null,mapDispatchToProps) (End); 