"use client";

import { Spotify } from "react-spotify-embed";

const Player = () => {
  const view = "coverart"; // or 'coverart list'
  const theme = "white"; // or 'white'
  return (
    <div className=' rounded-lg'>
      <iframe
        src='https://open.spotify.com/embed/playlist/1gAgsbs6NXwgqmqc04yQ6r?utm_source=generator'
        width='500'
        height='380'
        // frameborder='0'
        style={{ borderRadius: "12px" }}
        // allowtransparency='true'
        allow='encrypted-media'
        // allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      ></iframe>
    </div>
  );
};

export default Player;
