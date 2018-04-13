import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { setWinner } from '../store/actions'
import { bindActionCreators } from 'redux'
import Button2 from '../components/Button'

class End extends Component {
  constructor() {
   super()
   this.state = {
     text: ''
   } 
  }

  _goToGame = () => {
    console.log('tes')
    this.props.setWinner(null)
    this.props.navigation.navigate('Game')
  }

  _goToHome = () => {
    console.log('tes')
    this.props.setWinner(null)
    this.props.navigation.navigate('HomePage')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Tic Tac Toe </Text>
        {this.props.winner == null ? 
        <Text style={styles.info}>Draw Game</Text>
        :
        <Text style={styles.info}>{this.props.winner} Win!</Text>
        }
        <Button2 name={'Play Again'} goTo={this._goToGame}/>
        <Button2 name={'Home'} goTo={this._goToHome} />
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    marginHorizontal: '20%',
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10
  },
  info: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
   flex: 1,
   backgroundColor: 'lightgreen',
  },
  inner_button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    height: 40, 
    backgroundColor: 'white',
    marginHorizontal: '20%',
    marginTop: 150,
    padding: 10
  }
})

const mapStateToProps = state => ({
  winner: state.winner
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setWinner
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (End)