import { SEND_REQUEST, SAVE_REQUEST } from '../constants/constants.js'


export function getData(data) {
    return {
        type: SEND_REQUEST,
        payload: data,
    }
}

export function saveRequestData(data) {
    return {
        type: SAVE_REQUEST,
        payload: data,
    }
}