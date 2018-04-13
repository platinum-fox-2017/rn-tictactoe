import {
    SET_PLAYER,
    TURN
} from './actionTypes'

const initialState = {
    playerOne: '',
    playerTwo: '',
    boardData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER:
            return {
                ...state,
                playerOne: action.payload.playerOne,
                playerTwo: action.payload.playerTwo
            }
        case TURN:
            return {
                ...state,
                boardData: action.payload
            }
        default:
            return state;
    }
}

export default reducers;