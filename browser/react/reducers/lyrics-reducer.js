import {SET_LYRICS} from '../constants';

const initialState = {lyric: ''};

export default function reducer ( state = initialState, action) {  // sets state to initialState if undefined
    switch (action.type) {
        case SET_LYRICS:
            return Object.assign({}, state, {text: action.lyric});
        default:
            return state;
    }
}
