import React, {useEffect, useState} from 'react'

export const Clock = () => {
    const [time, setTime]=useState(new Date().toLocaleTimeString())
  return (
    <div>Clock</div>
  )
}
