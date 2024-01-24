import { useState, useEffect, useRef, useCallback } from 'react';

// icons
import {
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';



const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
   
    setTimeProgress(currentTime);
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);


  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
      </div>
      
    </div>
  );
};

export default Controls;
