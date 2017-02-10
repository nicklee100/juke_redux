import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

import setLyrics from '../action-creators/lyrics';
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

    setArtist() {
        this.setState({ artistQuery: artist })
    }

    setSong() {
        this.setState({ songQuery: song })
    }

    handleSubmit() {
        console.log(this.state);
        axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
        .then(function(lyrics) {
            // let lyricAction = setLyrics(lyrics.data.lyric);
            store.dispatch(setLyrics(lyrics.data.lyric));
        });
    }

    render() {
        return(<Lyrics
            text={this.state.text}
            setArtist={this.setArtist}
            setSong={this.setSong}
            artistQuery={this.state.artistQuery}
            songQuery={this.state.songQuery}
            handleSubmit={this.handleSubmit}
        />)
    }
}

export default LyricsContainer;
