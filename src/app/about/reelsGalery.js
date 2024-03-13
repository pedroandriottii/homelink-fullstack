"use client";
import React, { useState } from 'react';
import VideoComponent from './reels';

const videosInfo = [
  { videoPath: 'reels/reelsEduardo.mp4', posterPath: 'about/posterEduardo.png' },
  { videoPath: 'reels/reelsBruno2.mp4', posterPath: 'about/posterBruno2.png' },
  { videoPath: 'reels/reelsSilvio.mp4', posterPath: 'about/posterSilvio.png' },
  { videoPath: 'reels/reelsBruno.mp4', posterPath: 'about/posterBruno.png' },
  { videoPath: 'reels/reelsTacio.mp4', posterPath: 'about/posterTacio.png' },
];

const VideosGallery = () => {
  const [visibleVideos, setVisibleVideos] = useState(3);

  const loadMoreVideos = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 3);
  };

  return (
    <div className='flex flex-col items-center'>
      {videosInfo.slice(0, visibleVideos).map((videoInfo, index) => (
        <VideoComponent key={index} videoPath={videoInfo.videoPath} posterPath={videoInfo.posterPath} />
      ))}
      {visibleVideos < videosInfo.length && (
        <button onClick={loadMoreVideos} className='items-center border border-solid rounded-md max-w-40 border-home-link-background-blue p-2 mb-6 font-bold font-sans uppercase bg-[#ebebeb8c]'>
          Mostrar Mais
        </button>
      )}
    </div>
  );
};

export default VideosGallery;
