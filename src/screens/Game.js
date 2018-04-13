import React, { Component } from 'react';

import { connect }  from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions Site
import { printBoard } from '../../store/action.js'

// React Native
import { StyleSheet, View, Text } from 'react-native'

// Native Base
import { Container, Content, Form, Item, Label, Input, Icon, Button} from 'native-base'

class Game extends Component {
  static navigationOptions = {
    title: 'Tic Tac Uhuy'
  }

  componentDidMount () {
    this.props.printBoard()
  }

  componentDidUpdate () {
    
  }

  render() {
    return (
      <Container>
        <View>
        <Text>Game Play</Text>
      </View>
      {
        this.props.data.data.length > 0 &&
        <View style= {styles.container}>
          <View style={styles.board}>
            {
              this.props.data.data.map((val, i) => (
                <View style={styles.rows}>
                  {
                    val.map((box, i) => (
                      <View style={styles.box}>
                        <Text style={styles.box_content}>hi</Text>
                      </View>
                    ))
                  }
                </View>
              ))
            }
          </View>
        </View>
      }
      </Container>
    )
  }
}

const stateToProps = (state) => {
  return {
    data: state.data
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  printBoard
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Game)

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row'
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: '#000'
  },
  rows: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#d6d7da',
    flexDirection: 'row'
  },
  box: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#d6d7da',
  },
  box_content: {
    justifyContent: 'center'
  }
})
