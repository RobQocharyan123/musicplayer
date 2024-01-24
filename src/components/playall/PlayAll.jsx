import React,{useReducer, useState} from 'react';
import './PlayAll.css';
import { FaPlay } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { reducer } from '../../reducer';
import { initialValue } from './../../reducer';
import { actions } from './../../actions';
import AudioPlayer from '../songlist/AudioPlayer';
import { tracks } from './../../data/tracks';
import  AudioPlayerAll from './AudioPlayerAll';
import { useDispatch,useSelector  } from 'react-redux';


export const PlayAll = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)

  const[play,setPlay]=useState(false)


    const playAllCLick = ()=>{
        setPlay(!play)
        dispatch({type:actions.PLAY,payload:state.play})
      }
      console.log(state);
  return (
    <div className='playall'>
        <button className="play" >
          <button disabled = {state.disable} className={'playik'}>
          {/* <FaPlay /> */}
          <AudioPlayerAll />

            <span onClick={playAllCLick} > Play All</span>
          </button>
          <button disabled={state.disable}>
            <TiArrowSortedDown />
          </button>
        </button>
    </div>
  )
}
