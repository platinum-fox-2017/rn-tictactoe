import {
    SET_PLAYER
} from './actionTypes'

export const setPlayer = (payload) => {
    console.log(payload)
    return {
        type: SET_PLAYER,
        payload
    }
}