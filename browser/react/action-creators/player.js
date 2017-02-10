import { 
  START_PLAYING, 
  STOP_PLAYING, 
  SET_CURRENT_SONG, 
  SET_LIST, 
  SET_PROGRESS
} from '../constants';
import axios from 'axios';
import AUDIO from '../audio.js';

const startPlaying = () => ({
  type: START_PLAYING
});

export const play = () => {
  return dispatch => {
    // side effects, like using the audio element belong in async action creators too, even if they aren't "async"
    AUDIO.play();
    dispatch(startPlaying());
  }
}

const stopPlaying = () => ({
  type: STOP_PLAYING
});

export const pause = () => {
  return dispatch => {
    AUDIO.pause();
    dispatch(stopPlaying());
  }
};

const setCurrentSong = (currentSong) => ({
  type: SET_CURRENT_SONG,
  currentSong
});

const setCurrentSongList = (currentSongList) => ({
  type: SET_LIST,
  currentSongList
});

export const loadS = (currentSong, currentSongList) => {
  return dispatch => {
    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    dispatch( setCurrentSongList(currentSongList) );
    dispatch( setCurrentSong(currentSong) );
    
      
  }
}