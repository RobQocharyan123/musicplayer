import { useRef, useState } from 'react';
import { tracks } from '../../data/tracks';

import DisplayTrack from './DisplayTrack';
import Controls from './Controls';

const AudioPlayer = ({obj}) => {
  const [trackIndex, setTrackIndex] = useState(obj.track);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );

  const audioRef = useRef(null);
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
              audioRef
            }}
          />
        
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;