import React from 'react';
import VideoComponent from './reels';

const videosInfo = [
  { videoPath: 'reels/reelsEduardo.mp4', posterPath: 'poster/posterEduardo.png' },
  { videoPath: 'reels/reelsBruno.mp4', posterPath: 'poster/posterBruno.png' },
  { videoPath: 'reels/reelsBruno2.mp4', posterPath: 'poster/posterBruno2.png' },
  { videoPath: 'reels/reelsSilvio.mp4', posterPath: 'poster/posterSilvio.png' },
  { videoPath: 'reels/reelsTacio.mp4', posterPath: 'poster/posterTacio.png' },
];

const VideosGallery = () => {
  return (
    <div>
      {videosInfo.map((videoInfo, index) => (
        <VideoComponent key={index} videoPath={videoInfo.videoPath} posterPath={videoInfo.posterPath} />
      ))}
    </div>
  );
};

export default VideosGallery;
