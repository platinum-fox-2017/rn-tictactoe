import React, { Component } from 'react';
import { 
  View, 
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  setActivePlayer,
  setPlayer
} from '../../redux/game.action';

class GameScreenComponents extends Component {
  constructor () {
    super()
    this.state = {
      board: [
        '','','','','','','','',''
      ]
    }
  }
  
  render() {
    return (
      <View>
        <Text>
          { `Player Turn : ${this.props.activePlayer}`}
        </Text>
        <View style={ styles.container }>
          { this.state.board.maps(() => {
            return (
              <TouchableHighlight
                style={styles.button}
                onPress={this.onPress}
                >
                <Text> X </Text>
            </TouchableHighlight>
            )
          })}

          {/* <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
            >
            <Text> X </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
            >
            <Text> X </Text>
          </TouchableHighlight> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 120,
    height: 150,
    borderColor: 'red',
    borderWidth: 1
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})




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

