import { useState, useEffect } from "react";

import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";

const Controls = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <button onClick={togglePlayPause}>
      {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
    </button>
  );
};

export default Controls;
