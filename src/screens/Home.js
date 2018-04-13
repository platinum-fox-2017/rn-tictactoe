import React, { Component } from 'react';
import { connect }  from 'react-redux'
import { bindActionCreators } from 'redux'

// React Native
import { StyleSheet, View, Text } from 'react-native'

// Native Base
import { Container, Content, Form, Item, Label, Input, Icon, Button} from 'native-base'


class Home extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      triggerfalse: false
    }
  }

  setName = (text) => {
    this.setState({username: text})
  }

  submit = () => {
    if (this.state.username === '') {
      this.setState({triggerfalse: true})
    } else {
      this.props.navigation.navigate('Game', {
        username: this.state.username
      })
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" onChangeText={(text) => this.setName(text)} />
            </Item>
            <Item>
              {
                this.state.triggerfalse === true && 
                <Text style={styles.triggerfalse}>Please input username</Text>
              }
            </Item>
            <Item last>
              <Button onPress={this.submit}>
                <Text style={styles.text_play}>Play Game</Text>
              </Button>
            </Item>
          </Form>
        </Content>
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
  
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Home)

const styles = StyleSheet.create({
  text_play: {
    textAlign: 'center',
    width: '100%',
    color: '#ffffff'
  },
  triggerfalse: {
    color: '#e65100'
  }
});
