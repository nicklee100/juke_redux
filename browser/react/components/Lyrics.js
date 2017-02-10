import React from 'react';
import setLyrics from '../action-creators/lyrics';
import axios from 'axios';

const Lyrics = ({ text, setArtist, artistQuery, setSong, songQuery, handleSubmit }) => {

    return (
        <div>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <input onChange={ (e) => setArtist(e) } name="artist-search" type="text" value={ artistQuery } />
                <input onChange={ (e) => setSong(e) } name="song-search" type="text" value={ songQuery } />
                <button>SUBMIT</button>
            </form>
            <pre>{ text }</pre>
        </div>
    )

}

export default Lyrics;
