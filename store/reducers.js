import {
    SET_PLAYER
} from './actionTypes'

const initialState = {
    playerOne: '',
    playerTwo: '',
    boardData: [
        ['11','12','13'],
        ['21','22','23'],
        ['31','32','33']
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
        default: 
            return state;
    }
}

export default reducers;