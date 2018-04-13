import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class IconO extends React.Component {
  render () {
    return(
      <View>
        <View style={[ styles.container, {
          transform: [
            {translateX: 10},
            {translateY: 10}
          ],
          backgroundColor: '#000'
        }]}>
        </View>
        <View style={[ styles.container, {
          transform: [
            {translateX: 10},
            {translateY: 113}
          ],
          backgroundColor: '#000'
        }]}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 40
  },
  insideO: {
    height: 70,
    width: 70,
    borderRadius: 40,
  }
})

export default IconO;
