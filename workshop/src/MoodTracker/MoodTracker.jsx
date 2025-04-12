import React, { useState } from 'react'

export const UseState = () => {

    const [mood, setMood]=useState('🥰')
    const happy=()=>{
        setMood('😃')
    }

    const sad=()=>{
        setMood('😢')
    }

    const laugh=()=>{
        setMood('😂')
    }
  return (
    <div>
    <h1>Mood Tracker</h1>
    <h3>Mood: {mood}</h3>
    <button onClick={happy}>Happy</button>
    <button onClick={sad}>Sad</button>
    <button onClick={laugh}>Laugh</button>
    </div>
  )
}
