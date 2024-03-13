"use client";
import React, { useEffect, useState, useRef } from 'react';
import { getDownloadURL, ref as firebaseRef } from "firebase/storage";
import { storage } from '../../firebase';
import { loadingStyle, spinnerStyle } from './videoloading';

const VideoComponent = ({ videoPath, posterPath }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const storageRef = firebaseRef(storage, videoPath);
      try {
        const url = await getDownloadURL(storageRef);
        setVideoUrl(url);
      } catch (error) {
        console.error("Erro ao buscar a URL do vídeo:", error);
      }
    };

    fetchVideoUrl();
  }, [videoPath]);

  const handleVideoStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowControls(true);
    }
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '304px', margin: '20px' }}>
      {videoUrl ? (
        <video
          width="200"
          height="304"
          style={{ borderRadius: '20px', width: '100%', height: '100%' }}
          poster={posterPath}
          controls={showControls}
          ref={videoRef}
        >
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      ) : (
        <div style={loadingStyle}>
          <div style={spinnerStyle}></div>
        </div>
      )}
      {!showControls && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
          onClick={handleVideoStart}
        ></div>
      )}
    </div>
  );
};

export default VideoComponent;
