import {SET_LYRICS} from '../constants';
import setLyrics from '../action-creators/lyrics';

const initialState = {lyric: ''};

function reducer ( state = initialState, action) {  // sets state to initialState if undefined
    switch (action.type) {
        case SET_LYRICS:
            return Object.assign({}, state, {text: action.lyric});
        default:
            return state;
    }
}

export default reducer;
