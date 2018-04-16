import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import store from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('Testing Reducer', () => {
  it('should return state', () => {
    const state = store.getState().game
    expect(state).toBeDefined()
  })

  it('it should set playerOne and playerOne with name property after dispatch', () => {
    store.dispatch({
      type: 'SET_USERNAME',
      value: { playerOne: 'pemainsatu', playerTwo: 'pemaindua' },
    })
    
    const playerOne = store.getState().game.playerOne
    const playerTwo = store.getState().game.playerTwo
    expect(typeof playerOne).toEqual('string')
    expect(typeof playerTwo).toEqual('string')
    expect(playerOne).toEqual('pemainsatu')
    expect(playerTwo).toEqual('pemaindua')
  })

  it('it should update board after dispatch', () => {
    store.dispatch({
      type: 'UPDATE_BOARD',
      value: ['0','0','0','0','0','0','0','0','0'],
    })
    
    const board = store.getState().game.board
    expect(typeof board).toEqual('object')
    expect(board.length).toEqual(9)
    expect(board).toEqual(['0','0','0','0','0','0','0','0','0'])
  })

  it('it should set winner after dispatch', () => {
    store.dispatch({
      type: 'SET_WINNER',
      value: 'pemainsatu',
    })
    
    const winner = store.getState().game.winner
    expect(typeof winner).toEqual('string')
    expect(winner).toEqual('pemainsatu')
  })
})