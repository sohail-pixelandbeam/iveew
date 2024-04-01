import React, { useState, useEffect } from 'react';
import videoPath from '../../assets/videos/Iveew.mp4'

const FullScreenVideo = ({ isVideoPlaying, setIsVideoPlaying }) => {
  const [videoElement, setVideoElement] = useState(null);

//   useEffect(() => {
//     if (isVideoPlaying && videoElement) {
//       videoElement.requestFullscreen().catch(err => {
//         console.error('Error attempting to enable full-screen mode:', err.message);
//       });
//     } else if (!isVideoPlaying && document.fullscreenElement) {
//       document.exitFullscreen().catch(err => {
//         console.error('Error attempting to exit full-screen mode:', err.message);
//       });
//     }
//   }, [isVideoPlaying, videoElement]);

  const handlePause = () => {
    // Triggered when the video ends, you can add custom logic here if needed.
    setIsVideoPlaying(false)
  };

  const handleEnded = () => {
    // Triggered when the video ends, you can add custom logic here if needed.
    setIsVideoPlaying(false)
  };


  return (
    <>
      {isVideoPlaying && (
        <div className="fullscreen-video">
          <video
            controls
            autoPlay
            ref={videoRef => setVideoElement(videoRef)}
            onEnded={handleEnded}
            // onPause={handleControl}
          >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
};

export default FullScreenVideo;
