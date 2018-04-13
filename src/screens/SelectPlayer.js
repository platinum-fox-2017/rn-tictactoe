import React, { Component } from 'react';
import { 
  View, 
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlayer } from '../../redux/game.action';
import CompetitionListComponent from '../components/CompetitionListComponent';

class SelectPlayer extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default SelectPlayer;

