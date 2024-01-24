import { useRef, useState } from 'react';
import { tracks } from '../../data/tracks';

import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import "./PlayAll.css"

const AudioPlayerALl = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );

  const audioRef = useRef(null);
  const [timeProgress, setTimeProgress] = useState(0);
  return (
    <>
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
            }}
          />
          <Controls
            {...{
              audioRef,
              setTimeProgress
            }}
          />
        
        </div>
      </div>
    </>
  );
};
export default AudioPlayerALl;