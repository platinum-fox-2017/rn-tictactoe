import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import IconO from '../Components/IconO'
import { connect } from 'react-redux'
import { loadList } from '../store/main/main.action'
import { bindActionCreators } from 'redux'


class Main extends React.Component {

  static navigationOptions = {
    title: 'Tic Tac Toe',
  }

  getLocation = (e) => {
    this.props.loadList()
  }

  render () {
    return (
      <View style={ styles.container }>
        <View style={[styles.boxTitle, styles.title ]}>
          <Text style={{fontSize: 30}}>Board</Text>
        </View>
        <View style={[styles.boxTitle , styles.board]}>
          <View style={ styles.containerBoard }>
            <TouchableHighlight onPress={ () => this.getLocation()}>

              <View style={ styles.border }>
                <View style={ styles.line }>
                </View>
                <View style={[ styles.line ,{
                  transform: [
                    { translateX: 200 }
                  ]
                }]}>
                </View>
                <View style={[ styles.line ,{
                  height: 3,
                  width: 306,
                  transform: [
                    {translateY: 200}
                  ]
                }]}>
                </View>
                <View style={[ styles.line ,{
                  height: 3,
                  width: 306,
                  transform: [
                    {translateY: 100}
                  ]
                }]}>
                {
                  (this.props.main.isO) ?
                  <IconO /> :
                  <Text></Text>
                }
                </View>
              </View>

              </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  boxTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    flex: 1,
    backgroundColor: '#FFEEE4'
  },
  board: {
    flex: 5,
    backgroundColor: '#F17F42'
  },
  containerBoard: {
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#fff'
  },
  border: {
    borderWidth: 3,
    height: 312,
    width: 312
  },
  line: {
    backgroundColor: '#000',
    height: 306,
    width: 3,
    position: 'absolute',
    transform: [
      { translateX: 100 }
    ]
  }
});

const mapStateToProps = (state) => ({
  main: state.main
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadList
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Main);
