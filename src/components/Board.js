import React, { Component } from 'react';

// React Native
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

// Native Base
import { Card, CardItem, Container, Content, Form, Item, Label, Input, Icon, Button} from 'native-base'

export default class Board extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <View style={styles.board}>
          {
            this.props.data.map((val, x) => (
              <View style={styles.rows}>
                {
                  val.map((box, y) => (
                    <View>
                      {
                        box === 0 &&
                        <TouchableHighlight style={styles.box} onPress={this.props.submit(x,y,this.props.user)}>
                          <Text style={styles.box_content}></Text>
                        </TouchableHighlight>
                      }
                      {
                        box === 1 &&
                        <View style={styles.box}>
                          <Text style={styles.box_content}>X</Text>
                        </View>
                      }
                      {
                        box === 2 &&
                        <View style={styles.box}>
                          <Text style={styles.box_content}>O</Text>
                        </View>
                      }
                    </View>
                  ))
                }
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

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
    justifyContent: 'center',
    alignItems: 'center',
  },
})
