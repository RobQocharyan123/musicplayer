import React from 'react';
import './SongList.css';
import { TfiLayoutMenuV } from "react-icons/tfi";
import { IoIosHeart,IoMdCheckmark,IoMdShareAlt } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState} from 'react';
import AudioPlayer from './AudioPlayer';
import { SongRow } from './../songrow/SongRow';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';





export const SongList = () => {

   
    const state = useSelector(state=>state)

    const [arr,setArr] = useState(state.tracks)
    const [info,setInfo] = useState(state.tracks)


    useEffect(()=>{
      setArr(state.tracks)
    },[state])

    const onClickLike = (index)=>{

     setArr((prevArr)=>{

        return prevArr.map((obj)=>{
            if(obj.track===index){
                return {...obj,bool: !obj.bool}
            }
            return obj  
        })
    })

    }

    const onClickShare = (songName)=>{
      const messageText = JSON.stringify(songName); 
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(messageText)}`;
  
      window.open(whatsappUrl, '_blank');
    }
  return (
    <div className='songlist'>
      <ul className='small-header'>
        <li></li>
        <li>Song Name</li>
        <li>Artist Name</li>
        <li>Track</li>
        <li></li>
      </ul>
        {arr.map((i,index)=>{
            return (
              <>
                <ul key={index} className='tracks'>
                    <li><TfiLayoutMenuV /></li>
                    <li><AudioPlayer obj={i} /></li>
                    <li>{i.songName}</li>
                    <li>{i.artistName}</li>
                    <li>{i.track}</li>
                    <li  className={i.bool?'active':''} ><IoIosHeart onClick={()=>onClickLike(i.track)}  /></li>
                    <li><IoMdCheckmark /></li>
                    <li onClick={()=>onClickShare(i.songName)}><IoMdShareAlt /></li>
                    <li  ><TiArrowSortedDown  onClick={()=>onClickLike(i.track)} />          
                    </li>

                    
                   
                </ul>

                {i.bool &&
                    <ul>
                    <li><SongRow obj={i} /></li>
                  </ul>
                    }
                </>
            )
        })}
    </div>
  )
}
