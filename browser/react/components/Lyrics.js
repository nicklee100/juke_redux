import React from 'react';
import setLyrics from '../action-creators/lyrics';
import axios from 'axios';

const Lyrics = ({ text, setArtist, artistQuery, setSong, songQuery, submit }) => {

    return (
        <div>
            <form>
                <input name="artist-search" type="text" />
                <input name="song-search" type="text" />
                <button>SUBMIT</button>
            </form>
            <pre></pre>
        </div>
    )

}

export default Lyrics;
