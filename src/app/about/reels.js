"use client";
import React, { useEffect, useState, useRef } from 'react';
import { getDownloadURL, ref as firebaseRef } from "firebase/storage";
import { storage } from '../../firebase';
import { loadingStyle, spinnerStyle } from './videoloading';

const VideoComponent = ({ videoPath, posterPath }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
      setIsVideoPlaying(true);
    }
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '304px', margin: '20px' }}>
      {!isVideoPlaying && (
        <img
          src={posterPath}
          alt="Video poster"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '15px',
            cursor: 'pointer',
          }}
          onClick={handleVideoStart}
        />
      )}
      <video
        width="200"
        height="304"
        style={{
          borderRadius: '15px',
          width: '100%',
          height: '100%',
          display: isVideoPlaying ? 'block' : 'none',
        }}
        controls
        ref={videoRef}
      >
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      {videoUrl ? null : (
        <div style={loadingStyle}>
          <div style={spinnerStyle}></div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
