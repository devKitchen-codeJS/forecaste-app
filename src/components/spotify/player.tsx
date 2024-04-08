"use client";

const Player = () => {

  const view = "coverart"; // or 'coverart list'
  const theme = "white"; // or 'white'
  return (
    <div>
      <iframe
        className='border-radius:12px'
        src='https://open.spotify.com/embed/playlist/1gAgsbs6NXwgqmqc04yQ6r?utm_source=generator'
        width='100%'
        height='152'
        frameBorder='0'
        // allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'></iframe>
    </div>
  );
};

export default Player;
