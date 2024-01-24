import React from 'react';
import "./SongRow.css"

export const SongRow = ({obj}) => {
  return (
    <div className='songrow'>
        <p>{obj.info}</p>
    </div>
  )
}
