import {
    SET_PLAYER
} from './actionTypes'

const initialState = {
    playerOne: '',
    playerTwo: ''
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