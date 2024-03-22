import React, { useRef, useState, useEffect } from 'react';
import BackgroundVideo from "../../assets/Frame__0.webm";

const ExplosionControl = () => {
  const videoRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    // Ensure the video is loaded before setting initial time
    const video = videoRef.current;
    const onLoadedMetadata = () => {
      // Video duration is now available; you can set an initial time or adjust the slider if needed
    };
    video.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  // Function to update video time based on slider value
  const handleSliderChange = (event) => {
    const sliderValue = event.target.value;
    setSliderValue(sliderValue);

    // Calculate the new time for the video based on slider value
    // Ensure videoRef.current and videoRef.current.duration are defined and finite
    if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
      const newTime = videoRef.current.duration * (sliderValue / 100);
      // Set the current time only if newTime is finite
      if (Number.isFinite(newTime)) {
        videoRef.current.currentTime = newTime;
      }
    }
  };

  return (
    <div>
      <video ref={videoRef} width="1200" preload="metadata">
        <source  src={BackgroundVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default ExplosionControl;
