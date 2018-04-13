import React, { Component } from 'react';

import { connect }  from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions Site
import { printBoard, selectBox } from '../../store/action.js'

// React Native
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

// Native Base
import { Card, CardItem, Container, Content, Form, Item, Label, Input, Icon, Button} from 'native-base'

// Components
import Board from '../components/Board.js'

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: 1,
      winner: ''
    }
  }

  static navigationOptions = {
    title: 'Tic Tac Uhuy',
  }

  componentDidMount () {
    this.props.printBoard()
  }

  submit = (x, y, player) => {
    this.props.selectBox({x, y, player, board: this.props.data.data})
    if (player === 1) {
      this.setState({user: 2})
    } else {
      this.setState({user: 1})
    }
  }

  componentDidUpdate () {
    // if (this.props.data.data.length > 0) {
    //   // Check X
    //   for (let i = 0 ; i< this.props.data.data.length; i++) {
    //     let user;
    //     let count = 0
    //     for (let j = 0; j < this.props.data.data[i].length; j++) {
    //       if (j === 0 && this.props.data.data[i][j] !== 0) {
    //         user = this.props.data.data[i][j]
    //         count = 1
    //       } else {
    //         if (this.props.data.data[i][j] === user) {
    //           count++
    //         }
    //       }
    //     }
    //     if (count === 3) {
    //       this.setState({
    //         winner: user
    //       })
    //     } else {
    //       let user;
    //       let count = 0
    //     }
    //   }
    //   // Check Y
    //   for (let i = 0; i < this.props.data.data[i].length; i++) {
    //     let user;
    //     let count = 0
    //     for (let j = 0; j < this.props.data.data.length; j++) {
    //       if (i === 0 && this.props.data.data[0][i] !== 0) {
    //         user = this.props.data.data[0][i]
    //         count = 1
    //       } else {
    //         if (this.props.data.data[j][i] === user) {
    //           count++
    //         }
    //       }
    //     }

    //     if (count === 3) {
    //       this.setState({winner: user})
    //     } else {
    //       let user;
    //       let count = 0
    //     }
    //   }
    //   // Check Serong 
    // }
  }

  reloadGames = (value) => {
    if (value === true) {
      this.props.printBoard()
      this.setState({winner: ''})
    } else {
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <Container>
        <Item>
          <View>
            <Text>Game Play</Text>
          </View>
          <View>
            <Text>User {this.state.user}</Text>
          </View>
        </Item>
      {
        this.state.winner !== '' &&
        <Card>
          <CardItem>
            <Button style={styles.done_buttons} onPress={() => this.reloadGames(true)}>
              <Text style={styles.button_font}>Main</Text>
            </Button>
            <Button style={styles.done_buttons} onPress={() => this.reloadGames(false)}>
              <Text style={styles.button_font}>Pulang</Text>
            </Button>
          </CardItem>
        </Card>
      }
      {
        this.props.data.data.length > 0 && this.state.winner === '' &&
        <Board
          data={this.props.data.data}
          submit={this.submit}
          user={this.state.user}/>
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
  printBoard, selectBox
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Game)

const styles = StyleSheet.create({
  button_font: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#ffffff',
    flex: 1
  },
  done_buttons: {
    width: 80,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 10,
    marginRight: 10,
    flex: 1
  },
})
