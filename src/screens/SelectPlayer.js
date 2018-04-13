import React, { Component } from 'react';
import { 
  View, 
  Button,
  StyleSheet,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  setActivePlayer,
  setPlayer
} from '../../redux/game.action';

class SelectPlayer extends Component {
  setPlayer = (payload) => {
    if (payload === 'O') {
      objPlayer = {
        firstplayertype: 'O',
        secondplayertype: 'X'
      }
      this.props.setPlayer(objPlayer)
    } else {
      objPlayer = {
        firstplayertype: 'X',
        secondplayertype: 'O'
      }
      this.props.setPlayer(objPlayer)
    }

    this.props.setActivePlayer(`1`)
    this.props.navigation.navigate('GameScreen')
  }

  render() {
    return (
      <View style={ style.container }>
        <Text>
          {`Select Your Types`}
        </Text>
        <Button
          title={`X`}
          color="#ff6600"
          onPress={ () => {
            this.setPlayer('X')
          }}
        />
        <Button
          title={`O`}
          color="#ff6600"
          onPress={ () => {
            this.setPlayer('O')
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActivePlayer,
  setPlayer
}, dispatch)

export default connect(null,mapDispatchToProps)(SelectPlayer);

