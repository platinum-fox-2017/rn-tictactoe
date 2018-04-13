import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, Animated, TextInput, Alert } from 'react-native';

export default class Welcome extends Component {
  constructor(props) {
	  super(props);
	
	  this.state = {
	  	name: null,
	  	showButton: false,
	  	fadeAnim: new Animated.Value(0)
	  };

	  this.handleChangeText = this.handleChangeText.bind(this);
  }
  
  static navigationOptions = {
    title: 'Welcome to TicTacToe',
  };

  handleChangeText(text) {
    let showButton = this.state.showButton;
    let fadeAnim   = 0;

    if(text.length >= 1){
      showButton = true;
      fadeAnim   = 1;
    }else{
      showButton = false;
      fadeAnim   = 0;
    }

    this.setState({
      name: text,
      showButton: showButton
    });

    Animated.timing(
      this.state.fadeAnim,
      { toValue: fadeAnim, duration: 300 }
    ).start();
  };

  renderButton(){
    const { navigate } = this.props.navigation;

    return (
      <Animated.View 
        style={{
          zIndex: 1, 
          opacity: this.state.fadeAnim,
          transform: [{
            translateY: this.state.fadeAnim.interpolate({
              inputRange: [0,1],
              outputRange: [-10,0]
            })
          }]
        }}>
        <Button title="Submit" onPress={ () => navigate("Game", { name: this.state.name }) } />
      </Animated.View>
    )
  };

  render() {
    return (
      <View style={ styles.wrapper }>
        <Text style={{ marginBottom: 10 }}>Insert Your Cool Name ?</Text>
        <TextInput
          style={ styles.input }
          onChangeText={ (text) => this.handleChangeText(text) }
          onEndEdigint={ (text) => Alert.alert("Debug", text) }
        />
        { this.renderButton() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
  	padding: 10,
  	marginLeft: 20,
  	marginRight: 20,
  	borderWidth: 1,
  	borderColor: "gray",
    height: 40,
  	zIndex: 2
  }
});

// const mapStateToProps = state => ({
//   ...state.dict
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
  
// }, dispatch)

// export default connect(mapStateToProps,mapDispatchToProps)(Welcome);
