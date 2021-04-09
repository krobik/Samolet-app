import { SAVE_REQUEST } from '../constants/constants.js'

const initialState = {
    data: [],
}

export function rootReducer(state = initialState, action){
    switch (action.type) {
        case SAVE_REQUEST:
            return { ...state, data: [...action.payload] }
        default:
            return state
    }
}