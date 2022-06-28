import React from 'react';
import {FaBackward, FaForward} from 'react-icons/fa';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';


const PlayerControls = (props) => {
  return (
    <div className='c-player--controls'>
        <button className='skip-btn' onClick={() => props.SkipSong(false)}>
            <FaBackward />
        </button>
        <button className='play-btn' onClick={() => props.setIsPlaying(!props.isPlaying)}>
            {props.isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
        </button>
        <button className='skip-btn' onClick={() => props.SkipSong()}>
            <FaForward />
        </button>
    </div>
  )
}

export default PlayerControls