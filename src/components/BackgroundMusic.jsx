

import './backgroundMusic.scss'

import { useState } from 'react';

//assets
import music from '../assets/bg-music.mp3'
import logo from '../assets/logo.png'
import mute from '../assets/mute.svg'
import unmute from '../assets/unmute.svg'

//components
import Button from './Button';

const song = new Audio(music);

export default function BackgroundMusic(){
  const [playing, setPlaying] = useState(false)
  const [start, setStart] = useState(true)
  const [hide, setHide] = useState(false)




  const setAudio = (val) =>{
    val?(song.play()):(song.pause())
    setPlaying(val)
  }

  const onOptionSelected = (val) => {
    setHide(true)

    setTimeout(() => {
      setAudio(val);
      setStart(false);
    }, 1000)
   
  }
  
  return (
    <>

    {start?(
       <div className={hide?('initial-popup hide'):('initial-popup')}>
          <div className="initial-popup-frame">
            <p>Bienvenid@s a la invitación de</p>
            <img src={logo} alt="" />
            <p>La musica de fondo es parte de la experiencia.</p>

            <Button handleClick={onOptionSelected} clickParameters={true}>Ingresar con música</Button>
            <Button handleClick={onOptionSelected} clickParameters={false}>Ingresar sin música</Button>
          </div>

       </div>
    ):undefined}
     

      <div className="toggle-button" onClick={() => {setAudio(!playing)}}>
        <img src={playing?(mute):(unmute)} alt="" />

      </div>

    </>
  );
}