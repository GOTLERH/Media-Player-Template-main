import React from "react";

function Media(){
    return(
        <>
        <audio controls>
            <source src="/src/assets/audio/Californication.mp3" type="audio/mpeg"></source>
        This browser does not work with this audio.
        </audio>
        <button>Next</button>
        <button>Previous</button>
        <button>shuffle</button>
        </>
    )
}

export default Media