import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Tiles from './Tiles';

let arr = ['X','O','X','O','X','O','X','O','X']

export default class Board extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {
          arr.map((val) => {
            return <Tiles
              onPress={ () => {} }
              content={ val }
            />
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    backgroundColor: '#eeee',
  },
});
