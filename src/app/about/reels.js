"use client";
import React, { useEffect, useState, useRef } from 'react';
import { getDownloadURL, ref as firebaseRef } from "firebase/storage";
import { storage } from '../../firebase';

const VideoComponent = ({ videoPath, posterPath }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [showControls, setShowControls] = useState(false); // Estado para controlar a exibição dos controles
  const videoRef = useRef(null); // Referência para o elemento de vídeo

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

  // Função para iniciar a reprodução do vídeo e mostrar os controles
  const handleVideoStart = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Inicia a reprodução do vídeo
      setShowControls(true); // Mostra os controles
    }
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '304px' }}>
      {videoUrl ? (
        <video
          width="200"
          height="304"
          style={{ borderRadius: '15px', width: '100%', height: '100%' }}
          poster={posterUrl}
          controls={showControls}
          ref={videoRef}
        >
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      ) : (
        <p>Carregando vídeo...</p>
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
