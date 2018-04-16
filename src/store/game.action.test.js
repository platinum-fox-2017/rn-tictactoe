import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as game from './game.actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})

describe('testing setUsername action', () => {
  it('it should set username without error', () => {
    const res = store.dispatch(game.setUsername({
      playerOne: 'pemainsatu',
      playerTwo: 'pemaindua'
    }))
    const actions = store.getActions()
    expect(actions).toMatchObject([ {"type": "SET_USERNAME", "value": {"playerOne": "pemainsatu", "playerTwo": "pemaindua"}} ])
  })

  it('it should update board without error', () => {
    const res = store.dispatch(game.updateBoard(['0','0','0','0','0','0','0','0','0']))
    const actions = store.getActions()
    expect(actions).toMatchObject([ {"type": "SET_USERNAME", "value": {"playerOne": "pemainsatu", "playerTwo": "pemaindua"}}, {"type": "UPDATE_BOARD", "value": ["0", "0", "0", "0", "0", "0", "0", "0", "0"]} ])
  })

  it('it should set winner without error', () => {
    const res = store.dispatch(game.setWinner('pemainsatu'))
    const actions = store.getActions()
    expect(actions).toMatchObject([ {"type": "SET_USERNAME", "value": {"playerOne": "pemainsatu", "playerTwo": "pemaindua"}}, {"type": "UPDATE_BOARD", "value": ["0", "0", "0", "0", "0", "0", "0", "0", "0"]}, {"type": "SET_WINNER", "value": "pemainsatu"} ])
  })
})