import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

import { setLyrics, fetchLyrics } from '../action-creators/lyrics';
import axios from 'axios';

class LyricsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({
            artistQuery: '',
            songQuery: ''
        }, store.getState());

        this.setArtist = this.setArtist.bind(this);
        this.setSong = this.setSong.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    setArtist(e) {
        this.setState({ artistQuery: e.target.value })
    }

    setSong(e) {
        this.setState({ songQuery: e.target.value })
    }

    handleSubmit() {
//         console.log(this.state);
//       console.log('Artist Query:', this.state.artistQuery);
//         axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
//         .then(function(lyrics) {
// //           console.log('Lyrics:', lyrics);
// //           console.log('Lyric:', lyrics.data.lyric);
//             let lyricAction = setLyrics(lyrics.data.lyric);
//             store.dispatch(lyricAction);
//         });
      if (this.state.artistQuery && this.state.songQuery) {
        store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
      }
      
//         console.log(store.getState());
    }

    render() {
        return(<Lyrics
            text={this.state.lyrics.text}
            setArtist={this.setArtist}
            setSong={this.setSong}
            artistQuery={this.state.artistQuery}
            songQuery={this.state.songQuery}
            handleSubmit={this.handleSubmit}
        />)
    }
}

export default LyricsContainer;
