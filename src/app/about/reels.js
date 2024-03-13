"use client";
import React, { useEffect, useState, useRef } from 'react';
import { getDownloadURL, ref as firebaseRef } from "firebase/storage";
import { storage } from '../../firebase';

const loadingStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '15px', // Mantém o borda arredondada consistente com o vídeo
  backgroundColor: '#f0f0f0', // Uma cor de fundo; ajuste conforme necessário
};

const spinnerStyle = {
  border: '4px solid #f3f3f3', // Cor da borda "leve"
  borderTop: '4px solid #3498db', // Cor da borda superior (parte do spinner que será vista girando)
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  animation: 'spin 2s linear infinite',
};

const VideoComponent = ({ videoPath, posterPath }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchUrl = async (path, setUrl) => {
      const storageRef = firebaseRef(storage, path);
      try {
        const url = await getDownloadURL(storageRef);
        setUrl(url);
      } catch (error) {
        console.error("Erro ao buscar a URL:", error);
      }
    };

    fetchUrl(posterPath, setPosterUrl);
    fetchUrl(videoPath, setVideoUrl);
  }, [videoPath, posterPath]);

  const handleVideoStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowControls(true);
    }
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '304px', margin:'20px'}}>
      {videoUrl ? (
        <video
          width="200"
          height="304"
          style={{ borderRadius: '20px', width: '100%', height: '100%' }}
          poster={posterUrl}
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
