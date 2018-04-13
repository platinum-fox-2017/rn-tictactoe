import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import UsernameInput from '../components/UsernameInput'
import ButtonGeneral from '../components/ButtonGeneral'
import { UsernameUpdate } from '../store/data/data.actions'

class Home extends Component {
  handleChange = (e) => {
    console.log(e)
    this.props.username(e)
  }

  moveToGame = () => {
    this.props.navigation.navigate('Game')
  }

  render() {
    return (
      <View>
        <TitleBar text={'Tic Tac Toe '} />
        <View style={{ marginTop: 105 }}>
          <UsernameInput changeText={this.handleChange}/>
        </View>
        <View style={{ marginTop: 75 }}>
          { (this.props.data.username) ?
            <ButtonGeneral text={'Play Now'} press={ this.moveToGame } /> :
            <ButtonGeneral text={'Enter Username'} color={'red'} disabled='true'/> 
          }
        </View>
      </View>        
    )
  }

  compnentDidMount () {
    console.log(this.props.data)
  }

};

function mapStateToProps (state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    username: (payload) => dispatch(UsernameUpdate(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)