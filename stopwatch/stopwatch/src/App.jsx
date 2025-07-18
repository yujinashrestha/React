import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRef} from 'react'

function App() {
  const [timer, setTimer]=useState(0);
  const timeRef=useRef(null);

  function startTimer() {
   timeRef.current= setInterval(() => {
    setTimer(timer=>timer+1);
    }, 1000);
    
  }
  function stopTimer(){
    clearInterval(timeRef.current);
     timeRef.current=null;
  }

  function resetTimer() {
    clearInterval(timeRef.current);
    timeRef.current=null;
    setTimer(0);
  }
  return (
    <>
     <h1>Stopwatch:{timer}</h1>
     <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default App
