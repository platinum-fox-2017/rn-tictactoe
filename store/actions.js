import {
    SET_PLAYER,
    TURN
} from './actionTypes'

export const setPlayer = (payload) => {
    return {
        type: SET_PLAYER,
        payload
    }
}

export const turn = (payload) => {
    return {
        type: TURN,
        payload
    }
}