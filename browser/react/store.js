import { createStore, applyMiddleware, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import createLogger from 'redux-logger';

import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

let store = createStore(
  reducer,
  applyMiddleware(createLogger(), thunkMiddleware)
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
