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

class GameScreenComponents extends Component {
  render() {
    return (
      <View>
        <Text>
          { `Player Turn : ${this.props.activePlayer}`}
        </Text>
      </View>
    );
  }
}

const mapStateToProps= (state) => {
  return {
    activePlayer: state.gameReducer.activePlayer
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActivePlayer,
  setPlayer
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(GameScreenComponents);