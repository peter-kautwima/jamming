import React from "react";

import "./Playlist.css";

class Playlist extends React.Component {
    render() {
        return (
            <div class="Playlist">
                <input defaultvalue={"New Playlist"}/>
                {/* <TextTrackList /> */}
                 <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;