"use client";
import React, { useState } from 'react';
import VideoComponent from './reels';

const videosInfo = [
  { videoPath: 'reels/reelsEduardo.mp4', posterPath: 'poster/posterEduardo.png' },
  { videoPath: 'reels/reelsBruno2.mp4', posterPath: 'poster/posterBruno2.png' },
  { videoPath: 'reels/reelsSilvio.mp4', posterPath: 'poster/posterSilvio.png' },
  { videoPath: 'reels/reelsBruno.mp4', posterPath: 'poster/posterBruno.png' },
  { videoPath: 'reels/reelsTacio.mp4', posterPath: 'poster/posterTacio.png' },
];

const VideosGallery = () => {
  const [visibleVideos, setVisibleVideos] = useState(3); // Inicializa com os primeiros 3 vídeos visíveis

  const loadMoreVideos = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 3); // Carrega mais 3 vídeos
  };

  return (
    <div className='flex flex-col items-center'>
      {videosInfo.slice(0, visibleVideos).map((videoInfo, index) => (
        <VideoComponent key={index} videoPath={videoInfo.videoPath} posterPath={videoInfo.posterPath} />
      ))}
      {visibleVideos < videosInfo.length && (
        <button onClick={loadMoreVideos} className='items-center border border-solid rounded-md max-w-40 border-home-link-background-blue p-2 font-bold font-sans uppercase bg-[#ebebeb8c]'>
          Mostrar Mais
        </button>
      )}
    </div>
  );
};

export default VideosGallery;
